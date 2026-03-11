export const viltData = [
    {
      id: "storfugl",
      name: "Storfugl",
      latin: "Tetrao urogallus",
      image: "/media/images/storfugl-1.jpg",
      info: "Tiur, Røy og flere videre",
      season: "September - Desember",
      location: "Talgjem",
      habitat: "Barskog og løvskog",
      habitat_icon: "🪶",
      weight: "1,5 - 5 kg",
      family: "Fasanfamilien",
      category: "smavilt",
      sounds: [
        {
          id: "kontaktlyd",
          name: "Kontaktlyd",
          description: "Myke, lave lyder som brukes for kommunikasjon mellom familiemedlemmer, spesielt mellom hunn og kyllinger.",
          usage: "Sosial kommunikasjon i flokken",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:15"
        },
        {
          id: "alarmlyd",
          name: "Alarmlyd",
          description: "Skarp, høy lyd som brukes for å advare andre fugler om fare.",
          usage: "Farevarsling",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:08"
        },
        {
          id: "paringslyd",
          name: "Paringslyd",
          description: "Karakteristiske lyder fra hannen under leketiden for å tiltrekke seg hunner.",
          usage: "Paringsritual",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:25"
        }
      ],
      details: {
        "Om Storfugl": {
          description: {
            text: [
              "Storfugl (Tetrao urogallus) regnes som den største arten blant skoghøns i vår fauna. Den tilhører fasanfamilien (Phasianidae), som igjen er en del av hønsefuglene (Galliformes). Arten er godt tilpasset barskogen og finnes i store deler av Europa og Asia, inkludert Fennoskandia, hvor den har hatt en sentral plass i både naturmangfoldet og jakttradisjonene.",
              
              "Hannen kalles gjerne tiur, hunnen røy, og avkommet betegnes som kyllinger. Det er verdt å merke seg at ordet «tiur» i mange sammenhenger brukes som en generell betegnelse på arten, selv om det egentlig kun viser til hannen. Denne språkbruken henger trolig sammen med tiurens imponerende størrelse og rolle under spilltiden.",
              
              "Storfugl viser tydelig kjønnsdimorfisme. Tiuren kan veie flere kilo mer enn røya og har en kraftig, mørk og glansfull fjærdrakt med innslag av metalliske fargetoner. Røya er derimot langt mindre og har en mer nøytral og kamuflasjepreget fjærdrakt, noe som gir god beskyttelse når hun ruger på bakken. Disse forskjellene gjør at kjønnene kan se nesten ut som to ulike arter for den uinnvidde.",
              
              "Ifølge IUCN regnes storfugl som en livskraftig art, og dette gjelder også for bestandene i Fennoskandia. Bestanden kan variere fra år til år på grunn av klima, predasjon og mattilgang, men totalt sett står arten sterkt. Til tross for enkelte lokale nedganger, er storfugl fortsatt en viktig og karakteristisk art i våre skoger, både økologisk og kulturelt.",
              
              "For mange jegere og friluftsinteresserte har møtet med storfugl en helt spesiell verdi. Fuglen representerer både urkraft og villmark, og tiurens vårspill er en opplevelse som har fascinert generasjoner. Dette gjør at arten ikke bare er biologisk interessant, men også en del av vår kulturarv."
            ],
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Storfugl i sitt naturlige habitat",
                alt: "Storfugl i barskog"
              },
               {
                 type: "video",
                 url: "/media/videos/storfugl-video.mp4",
                 thumbnail: "/media/images/storfugl-2.jpg",
                 caption: "Storfugl paringslek",
                 duration: "2:30"
               }
            ]
          },
          characteristics: {
            text: "Hannen (tiur) kan veie opptil 5 kg og har karakteristisk svart fjærdrakt med grønn glans. Hunnen (røy) er mindre og har brun fjærdrakt med mørke striper.",
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Tiur (hann) med karakteristisk fjærdrakt",
                alt: "Storfugl hann"
              },
              {
                type: "image",
                url: "/media/images/storfugl-2.jpg",
                caption: "Røy (hunn) med brun fjærdrakt",
                alt: "Storfugl hunn"
              }
            ]
          },
          behavior: {
            text: "Storfugl lever i barskog og løvskog, og er mest aktiv i skumringen og gryningen. De eter bær, nøtter, insekter og unge skudd.",
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Storfugl beiter på bær",
                alt: "Storfugl beiter"
              }
            ]
          }
        },
        "Jaktformer": {
          methods: {
            text: "Storfugljakt foregår hovedsakelig ved å skyte på leken om høsten. Jegere plasserer seg strategisk rundt lekeplassen og venter på at fuglene skal komme.",
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Jegere på lekeplass",
                alt: "Storfugljakt på leken"
              }
            ]
          },
          equipment: {
            text: "Brukes vanligvis haglegevær med kaliber 12 eller 16. Skudd nr. 3-5 er vanlig for storfugl.",
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Haglegevær for storfugljakt",
                alt: "Jaktvåpen"
              }
            ]
          },
          timing: {
            text: "Jakt på storfugl foregår fra september til desember, med hovedsesong i oktober-november.",
            media: []
          }
        },
        "Utnyttelse": {
          meat: {
            text: "Storfuglkjøtt er mørkt og smakfullt, perfekt for steking eller gryteretter. Brystet er spesielt verdsatt.",
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Storfuglkjøtt tilberedt",
                alt: "Tilberedt storfuglkjøtt"
              }
            ]
          },
          preparation: {
            text: "Rens fuglen grundig og fjern innvollene. Kjøttet kan marineres i rødvin og krydder før tilberedning.",
            media: [
              {
                type: "video",
                url: "/media/videos/storfugl-video.mp4",
                thumbnail: "/media/images/storfugl-2.jpg",
                caption: "Hvordan rens storfugl",
                duration: "5:45"
              }
            ]
          },
          recipes: {
            text: "Tradisjonelle retter inkluderer storfugl med rødkål, storfugl i gryte med sopp, eller storfugl med bjørnebær.",
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Storfugl med rødkål",
                alt: "Tradisjonell storfuglrett"
              }
            ]
          }
        },
        "Bestand": {
          population: {
            text: "Storfuglbestanden i Norge er stabil, men varierer etter region. Beste bestander finnes i Østlandet og Trøndelag.",
            media: [
              {
                type: "image",
                url: "/media/images/storfugl-1.jpg",
                caption: "Storfuglbestand i naturlig habitat",
                alt: "Storfuglbestand"
              }
            ]
          },
          conservation: {
            text: "Arten er regulert gjennom jaktkort og sesongbestemmelser. Det er viktig å respektere jakttider for å sikre bestandens helse.",
            media: []
          },
          threats: {
            text: "Hovedtrusler er habitatfragmentering, klimaendringer og forstyrrelser under leketiden.",
            media: []
          }
        }
      }
    },
    {
      id: "elg",
      name: "Elg",
      latin: "Alces alces",
      image: "/media/images/elg-1.jpg",
      info: "Norges største hjortedyr",
      season: "September - Oktober",
      location: "Hele Norge",
      habitat: "Skog og myr",
      habitat_icon: "🫎",
      weight: "300 - 700 kg",
      family: "Hjortedyr",
      category: "Storvilt",
      sounds: [
        {
          id: "elgkal",
          name: "Elgkal",
          description: "Dype, resonerende lyder fra elgkal som brukes for å lokke elg under jakten.",
          usage: "Jakt og lokking",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:20"
        },
        {
          id: "brøling",
          name: "Brøling",
          description: "Kraftige brøl fra hannen under brunsttiden for å markere territorium.",
          usage: "Territoriummarkering",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:12"
        }
      ],
      details: {
        "Om Elg": {
          description: {
            text: "Elg er Norges største hjortedyr og en av de mest ettertraktede jaktartene. Den majestetiske arten er kjent for sin store størrelse og imponerende gevir.",
            media: [
              {
                type: "image",
                url: "/media/images/elg-1.jpg",
                caption: "Elg i naturlig habitat",
                alt: "Elg i skog"
              },
               {
                 type: "video",
                 url: "/media/videos/elg-video.mp4",
                 thumbnail: "/media/images/elg-1.jpg",
                 caption: "Elg i bevegelse",
                 duration: "1:45"
               }
            ]
          },
          characteristics: {
            text: "Hannen kan veie opptil 700 kg og har et stort gevir som kan ha opptil 20 tagger. Hunnen er mindre og uten gevir.",
            media: [
              {
                type: "image",
                url: "/media/images/elg-1.jpg",
                caption: "Elg med imponerende gevir",
                alt: "Elg gevir"
              },
              {
                type: "image",
                url: "/media/images/elg-1.jpg",
                caption: "Elg hunn uten gevir",
                alt: "Elg hunn"
              }
            ]
          },
          behavior: {
            text: "Elg lever i skog og myr, og er mest aktiv i skumringen og nattestid. De eter bark, kvister, vannplanter og gress.",
            media: []
          }
        },
        "Jaktformer": {
          methods: {
            text: "Elgjakt foregår hovedsakelig ved å skyte på elgen når den beiter eller hviler. Jegere bruker ofte elgkal eller lokker for å tiltrekke seg elgen.",
            media: []
          },
          equipment: {
            text: "Brukes vanligvis rifle med kaliber .308 Winchester eller større. Skudd på hjerte/lunge er anbefalt.",
            media: []
          },
          timing: {
            text: "Elgjakt foregår fra september til oktober, med hovedsesong i siste halvdel av september.",
            media: []
          }
        },
        "Utnyttelse": {
          meat: {
            text: "Elgkjøtt er mager og næringsrikt, med en mild og delikat smak. Det er høyt verdsatt for sin kvalitet.",
            media: [
              {
                type: "image",
                url: "/media/images/elg-1.jpg",
                caption: "Elgkjøtt tilberedt",
                alt: "Tilberedt elgkjøtt"
              }
            ]
          },
          preparation: {
            text: "Elgkjøtt bør modnes i kjøleskap i 3-5 dager før tilberedning. Kan stekes, kokes eller brukes i gryteretter.",
            media: []
          },
          recipes: {
            text: "Populære retter inkluderer elgsteik, elgburger, elggryte med sopp, og elg med bjørnebærsaus.",
            media: [
              {
                type: "image",
                url: "/media/images/elg-1.jpg",
                caption: "Elgsteik med tilbehør",
                alt: "Elgsteik rett"
              }
            ]
          }
        },
        "Bestand": {
          population: {
            text: "Elgbestanden i Norge er stor og stabil, med omtrent 120 000 dyr. Beste bestander finnes i Østlandet og Trøndelag.",
            media: []
          },
          conservation: {
            text: "Elgen er regulert gjennom jaktkort og sesongbestemmelser. Det er viktig å respektere jakttider for å sikre bestandens helse.",
            media: []
          },
          threats: {
            text: "Hovedtrusler er trafikkulykker, habitatfragmentering og klimaendringer som påvirker fødegrunnlaget.",
            media: []
          }
        }
      }
    },
    {
      id: "rady",
      name: "Rådyr",
      latin: "Capreolus capreolus",
      image: "/media/images/rady-1.jpg",
      info: "Elegant og rask hjortevilt",
      season: "Mai - September",
      location: "Hele Norge",
      habitat: "Åpen skog og kulturlandskap",
      habitat_icon: "🫎",
      weight: "15 - 35 kg",
      family: "Hjortedyr",
      category: "Storvilt",
      sounds: [
        {
          id: "rådyrkal",
          name: "Rådyrkal",
          description: "Høye, skarpe lyder fra rådyrkal som brukes for å lokke rådyr under jakten.",
          usage: "Jakt og lokking",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:10"
        },
        {
          id: "alarm",
          name: "Alarm",
          description: "Korte, skarpe lyder som rådyr lager når de oppdager fare.",
          usage: "Farevarsling",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:05"
        }
      ],
      details: {
        "Om Rådyr": {
          description: {
            text: "Rådyr er Norges minste hjortedyr og er kjent for sin elegante bevegelse og hurtighet. Arten er svært tilpasningsdyktig og finnes over hele landet.",
            media: [
              {
                type: "image",
                url: "/media/images/rady-1.jpg",
                caption: "Rådyr i kulturlandskap",
                alt: "Rådyr i åpent landskap"
              }
            ]
          },
          characteristics: {
            text: "Hannen veier 20-35 kg og har små gevirer. Hunnen veier 15-25 kg og er uten gevir. Begge kjønn har rødbrun sommerpels og gråbrun vinterpels.",
            media: []
          },
          behavior: {
            text: "Rådyr lever i åpen skog og kulturlandskap, og er mest aktive i skumringen og gryningen. De eter gress, urter, bark og kvister.",
            media: []
          }
        },
        "Jaktformer": {
          methods: {
            text: "Rådyrjakt foregår ved å skyte på dyrene når de beiter eller hviler. Jegere bruker ofte rådyrkal eller lokker for å tiltrekke seg dyrene.",
            media: []
          },
          equipment: {
            text: "Brukes vanligvis rifle med kaliber .223 Remington eller .243 Winchester. Skudd på hjerte/lunge er anbefalt.",
            media: []
          },
          timing: {
            text: "Rådyrjakt foregår fra mai til september, med hovedsesong i august-september.",
            media: []
          }
        },
        "Utnyttelse": {
          meat: {
            text: "Rådyrkjøtt er mager og delikat, med en mild og sød smak. Det er høyt verdsatt for sin kvalitet og finhet.",
            media: [
              {
                type: "image",
                url: "/media/images/rady-1.jpg",
                caption: "Rådyrkjøtt tilberedt",
                alt: "Tilberedt rådyrkjøtt"
              }
            ]
          },
          preparation: {
            text: "Rådyrkjøtt bør modnes i kjøleskap i 2-3 dager før tilberedning. Kan stekes, kokes eller brukes i gryteretter.",
            media: [
              {
                type: "image",
                url: "/media/images/rady-1.jpg",
                caption: "Rådyrkjøtt forberedelse",
                alt: "Rådyrkjøtt forberedelse"
              }
            ]
          },
          recipes: {
            text: "Populære retter inkluderer rådyrsteik, rådyrburger, rådyrgryte med sopp, og rådyr med bjørnebærsaus.",
            media: [
              {
                type: "image",
                url: "/media/images/rady-1.jpg",
                caption: "Rådyrsteik med tilbehør",
                alt: "Rådyrsteik rett"
              }
            ]
          }
        },
        "Bestand": {
          population: {
            text: "Rådyrbestanden i Norge er stor og voksende, med omtrent 200 000 dyr. Beste bestander finnes i Sør-Norge.",
            media: []
          },
          conservation: {
            text: "Rådyret er regulert gjennom jaktkort og sesongbestemmelser. Det er viktig å respektere jakttider for å sikre bestandens helse.",
            media: []
          },
          threats: {
            text: "Hovedtrusler er trafikkulykker, habitatfragmentering og klimaendringer som påvirker fødegrunnlaget.",
            media: []
          }
        }
      }
    },
    {
      id: "hjort",
      name: "Hjort",
      latin: "Cervus elaphus",
      image: "/media/images/hjort-1.jpg",
      info: "Majestetisk hjortevilt",
      season: "September - Oktober",
      location: "Sør-Norge",
      habitat: "Løvskog og kulturlandskap",
      habitat_icon: "🫎",
      weight: "90 - 250 kg",
      family: "Hjortedyr",
      category: "Storvilt",
      sounds: [
        {
          id: "hjortkal",
          name: "Hjortkal",
          description: "Dype, resonerende lyder fra hjortkal som brukes for å lokke hjort under jakten.",
          usage: "Jakt og lokking",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:18"
        },
        {
          id: "brunstbrøl",
          name: "Brunstbrøl",
          description: "Kraftige brøl fra hannen under brunsttiden for å tiltrekke hunner og markere territorium.",
          usage: "Paringsritual",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:15"
        }
      ],
      details: {
        "Om Hjort": {
          description: {
            text: "Hjort er en majestetisk hjortedyr som er kjent for sitt imponerende gevir og elegante bevegelse. Arten finnes hovedsakelig i Sør-Norge.",
            media: []
          },
          characteristics: {
            text: "Hannen kan veie opptil 250 kg og har et stort gevir som kan ha opptil 16 tagger. Hunnen er mindre og uten gevir.",
            media: []
          },
          behavior: {
            text: "Hjort lever i løvskog og kulturlandskap, og er mest aktive i skumringen og gryningen. De eter gress, urter, bark og kvister.",
            media: []
          }
        },
        "Jaktformer": {
          methods: {
            text: "Hjortjakt foregår ved å skyte på dyrene når de beiter eller hviler. Jegere bruker ofte hjortkal eller lokker for å tiltrekke seg dyrene.",
            media: []
          },
          equipment: {
            text: "Brukes vanligvis rifle med kaliber .308 Winchester eller større. Skudd på hjerte/lunge er anbefalt.",
            media: []
          },
          timing: {
            text: "Hjortjakt foregår fra september til oktober, med hovedsesong i siste halvdel av september.",
            media: []
          }
        },
        "Utnyttelse": {
          meat: {
            text: "Hjortkjøtt er mager og næringsrikt, med en mild og delikat smak. Det er høyt verdsatt for sin kvalitet.",
            media: [
              {
                type: "image",
                url: "/media/images/hjort-1.jpg",
                caption: "Hjortkjøtt tilberedt",
                alt: "Tilberedt hjortkjøtt"
              }
            ]
          },
          preparation: {
            text: "Hjortkjøtt bør modnes i kjøleskap i 3-5 dager før tilberedning. Kan stekes, kokes eller brukes i gryteretter.",
            media: [
              {
                type: "image",
                url: "/media/images/hjort-1.jpg",
                caption: "Hjortkjøtt forberedelse",
                alt: "Hjortkjøtt forberedelse"
              }
            ]
          },
          recipes: {
            text: "Populære retter inkluderer hjortsteik, hjortburger, hjortgryte med sopp, og hjort med bjørnebærsaus.",
            media: [
              {
                type: "image",
                url: "/media/images/hjort-1.jpg",
                caption: "Hjortsteik med tilbehør",
                alt: "Hjortsteik rett"
              }
            ]
          }
        },
        "Bestand": {
          population: {
            text: "Hjortbestanden i Norge er moderat og stabil, med omtrent 50 000 dyr. Beste bestander finnes i Sør-Norge.",
            media: []
          },
          conservation: {
            text: "Hjorten er regulert gjennom jaktkort og sesongbestemmelser. Det er viktig å respektere jakttider for å sikre bestandens helse.",
            media: []
          },
          threats: {
            text: "Hovedtrusler er trafikkulykker, habitatfragmentering og klimaendringer som påvirker fødegrunnlaget.",
            media: []
          }
        }
      }
    },
    {
      id: "Ulv",
      name: "Ulv",
      latin: "Alces alces",
      image: "/media/images/ulv-1.jpg",
      info: "En av Norges mest spenningfullste rovvilter",
      season: "September - Oktober",
      location: "Øst-Norge",
      habitat: "Skog og tundra",
      habitat_icon: "🫎",
      weight: "30 - 50 kg",
      family: "Rovdyr",
      category: "Rovvilt",
      sounds: [
        {
          id: "ulvkal",
          name: "Ulvkal",
          description: "Dype, resonerende lyder fra ulvkal som brukes for å lokke ulv under jakten.",
          usage: "Jakt og lokking",
          audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
          duration: "0:20"
        }
      ],
      details: {
        "Om Ulv": {
          description: {
            text: "Ulv er en av Norges mest spenningfullste rovvilter og en av de mest ettertraktede jaktartene. Den majestetiske arten er kjent for sin store størrelse og imponerende gevir.",
            media: [
              {
                type: "image",
                url: "/media/images/ulv-1.jpg",
                caption: "Ulv i naturlig habitat",
                alt: "Ulv i skog"
              },
               {
                 type: "video",
                 url: "/media/videos/ulv-video.mp4",
                 thumbnail: "/media/images/ulv-1.jpg",
                 caption: "Ulv i bevegelse",
                 duration: "1:45"
               }
            ]
          },
          characteristics: {
            text: "Hannen kan veie opptil 50 kg og har et stort gevir som kan ha opptil 20 tagger. Hunnen er mindre og uten gevir.",
            media: [
              {
                type: "image",
                url: "/media/images/ulv-1.jpg",
                caption: "Ulv i skog",
                alt: "Ulv gevir"
              },
              {
                type: "image",
                url: "/media/images/ulv-1.jpg",
                caption: "Ulve flokk",
                alt: "Ulv hunn"
              }
            ]
          },
          behavior: {
            text: "Ulv lever i skog og myr, og er mest aktiv i skumringen og nattestid. De eter bark, kvister, vannplanter og gress.",
            media: []
          }
        },
        "Jaktformer": {
          methods: {
            text: "Elgjakt foregår hovedsakelig ved å skyte på elgen når den beiter eller hviler. Jegere bruker ofte elgkal eller lokker for å tiltrekke seg elgen.",
            media: []
          },
          equipment: {
            text: "Brukes vanligvis rifle med kaliber .308 Winchester eller større. Skudd på hjerte/lunge er anbefalt.",
            media: []
          },
          timing: {
            text: "Elgjakt foregår fra september til oktober, med hovedsesong i siste halvdel av september.",
            media: []
          }
        },
        "Utnyttelse": {
          meat: {
            text: "Elgkjøtt er mager og næringsrikt, med en mild og delikat smak. Det er høyt verdsatt for sin kvalitet.",
            media: [
              {
                type: "image",
                url: "/media/images/elg-1.jpg",
                caption: "Elgkjøtt tilberedt",
                alt: "Tilberedt elgkjøtt"
              }
            ]
          },
          preparation: {
            text: "Elgkjøtt bør modnes i kjøleskap i 3-5 dager før tilberedning. Kan stekes, kokes eller brukes i gryteretter.",
            media: []
          },
          recipes: {
            text: "Populære retter inkluderer elgsteik, elgburger, elggryte med sopp, og elg med bjørnebærsaus.",
            media: [
              {
                type: "image",
                url: "/media/images/elg-1.jpg",
                caption: "Elgsteik med tilbehør",
                alt: "Elgsteik rett"
              }
            ]
          }
        },
        "Bestand": {
          population: {
            text: "Elgbestanden i Norge er stor og stabil, med omtrent 120 000 dyr. Beste bestander finnes i Østlandet og Trøndelag.",
            media: []
          },
          conservation: {
            text: "Elgen er regulert gjennom jaktkort og sesongbestemmelser. Det er viktig å respektere jakttider for å sikre bestandens helse.",
            media: []
          },
          threats: {
            text: "Hovedtrusler er trafikkulykker, habitatfragmentering og klimaendringer som påvirker fødegrunnlaget.",
            media: []
          }
        }
      }
    }
  ];

// Kategorier for filtrering
export const viltCategories = [
  { id: 'alle', name: 'Alle', icon: '👁️' },
  { id: 'storvilt', name: 'Storvilt', icon: '🫎' },
  { id: 'smavilt', name: 'Småvilt', icon: '🐇' },
  { id: 'rovvilt', name: 'Rovvilt', icon: '🐺' }
];