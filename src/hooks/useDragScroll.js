import { useRef, useState, useEffect, useCallback } from 'react';

export const useDragScroll = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    velocity: 0,
    momentumID: null
  });

  const cancelMomentum = useCallback(() => {
    if (dragStateRef.current.momentumID) {
      cancelAnimationFrame(dragStateRef.current.momentumID);
      dragStateRef.current.momentumID = null;
    }
  }, []);

  const beginMomentum = useCallback((el) => {
    cancelMomentum();
    const step = () => {
      el.scrollLeft += dragStateRef.current.velocity;
      dragStateRef.current.velocity *= 0.95; 
      if (Math.abs(dragStateRef.current.velocity) > 0.5) {
        dragStateRef.current.momentumID = requestAnimationFrame(step);
      }
    };
    dragStateRef.current.momentumID = requestAnimationFrame(step);
  }, [cancelMomentum]);

  const stopDrag = useCallback((el) => {
    if (dragStateRef.current.isDown) {
      dragStateRef.current.isDown = false;
      el.classList.remove("cursor-grabbing");
      beginMomentum(el);
    }
  }, [beginMomentum]);

  const mouseDown = useCallback((e) => {
    const el = e.currentTarget;
    dragStateRef.current.isDown = true;
    setIsDragging(false);
    el.classList.add("cursor-grabbing");
    dragStateRef.current.startX = e.pageX - el.offsetLeft;
    dragStateRef.current.scrollLeft = el.scrollLeft;
    dragStateRef.current.velocity = 0;
    cancelMomentum();
  }, [cancelMomentum]);

  const mouseMove = useCallback((e) => {
    if (!dragStateRef.current.isDown) return;
    e.preventDefault();
    const el = e.currentTarget;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragStateRef.current.startX);

    if (Math.abs(walk) > 1) { 
      // 👈 over 1px regnes som drag, ikke klikk
      setIsDragging(true);
    }

    el.scrollLeft = dragStateRef.current.scrollLeft - walk;
    dragStateRef.current.velocity = -(walk - (dragStateRef.current.scrollLeft - el.scrollLeft));
    dragStateRef.current.scrollLeft = el.scrollLeft;
    dragStateRef.current.startX = x;
  }, []);

  const mouseUp = useCallback((e) => {
    stopDrag(e.currentTarget);
  }, [stopDrag]);

  const mouseLeave = useCallback((e) => {
    stopDrag(e.currentTarget);
  }, [stopDrag]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("mousedown", mouseDown);
    el.addEventListener("mouseleave", mouseLeave);
    el.addEventListener("mouseup", mouseUp);
    el.addEventListener("mousemove", mouseMove);

    return () => {
      el.removeEventListener("mousedown", mouseDown);
      el.removeEventListener("mouseleave", mouseLeave);
      el.removeEventListener("mouseup", mouseUp);
      el.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseDown, mouseLeave, mouseUp, mouseMove]);

  return { scrollRef, isDragging };
};
