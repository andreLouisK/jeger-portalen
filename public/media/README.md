# Media Mappe

Denne mappen inneholder bilder og videoer som brukes i Jeger Portalen.

## Mappestruktur

```
public/media/
├── images/          # Plasser bilder her (.jpg, .jpeg, .png, .gif, .webp)
└── videos/          # Plasser videoer her (.mp4, .webm, .ogg)
```

## Hvordan legge til media

1. **Bilder**: Kopier bildene dine til `public/media/images/` mappen
2. **Videoer**: Kopier videoene dine til `public/media/videos/` mappen

## Hvordan referere til media i data.js

Når du legger til media i `data.js`, bruk følgende format:

```javascript
// For bilder
{
  type: 'image',
  url: '/media/images/ditt-bilde.jpg',
  caption: 'Beskrivelse av bildet',
  alt: 'Alt tekst for tilgjengelighet'
}

// For videoer
{
  type: 'video',
  url: '/media/videos/din-video.mp4',
  thumbnail: '/media/images/video-thumbnail.jpg', // Valgfri thumbnail
  caption: 'Beskrivelse av videoen',
  duration: '2:30' // Valgfri varighet
}
```

## Støttede formater

**Bilder:**
- JPG/JPEG
- PNG
- GIF
- WebP

**Videoer:**
- MP4 (anbefalt)
- WebM
- OGG

## Eksempel-filer som er lagt til

For testing er det lagt til følgende eksempel-filer:

**Bilder:**
- `storfugl-1.jpg` - Eksempel-bilde for storfugl
- `storfugl-2.jpg` - Eksempel-bilde for storfugl
- `elg-1.jpg` - Eksempel-bilde for elg
- `rady-1.jpg` - Eksempel-bilde for rådyr
- `hjort-1.jpg` - Eksempel-bilde for hjort

**Videoer:**
- `storfugl-video.mp4` - Eksempel-video for storfugl
- `elg-video.mp4` - Eksempel-video for elg

## Tips

- Bruk beskrivende filnavn
- Optimaliser bilder for web (ikke for store filer)
- For videoer, vurder å lage en thumbnail-bilde for bedre brukeropplevelse
- Alle filer i `public/media/` mappen vil være tilgjengelige via URL-en `/media/...`
- Erstatt eksempel-filene med ekte bilder og videoer når du har dem

## Viktig endring

YouTube-støtte er fjernet! Alle videoer må nå være lokale filer i `public/media/videos/` mappen.
