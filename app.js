// Database med kompetansemål fra LK20, oversatt til kartleggingsoppgaver og IOP-tiltak.

const localDatabase = {
    "matematikk": {
        "2": [
            {
                "udir_maal": "uttrykke egne tanker og lytte til andres matematiske resonnementer",
                "oppgave": "Kan eleven forklare hvordan hen tenkte for å løse et enkelt regnestykke (f.eks. 5+4)?",
                "iop_tiltak": "Eleven skal trene på å sette ord på egen regnemåte, f.eks. ved å forklare 'jeg tenkte 5 og telte 4 videre' til en læringspartner."
            },
            {
                "udir_maal": "telle til 100, dele opp og bygge mengder",
                "oppgave": "Be eleven telle til 100 (passering av tiere), og bygge tallet 34 med tiere og enere.",
                "iop_tiltak": "Eleven skal øve på å telle videre fra et gitt tall under 100, og bygge tallmengder med base-10 materiell."
            },
            {
                "udir_maal": "ordne tall, mengder og former ut fra egenskaper",
                "oppgave": "Sorter tallene 45, 12, 89, 34 fra minst til størst.",
                "iop_tiltak": "Eleven skal kunne sortere tall opp til 100 i riktig rekkefølge ved bruk av tallinje."
            },
            {
                "udir_maal": "utvikle og bruke hensiktsmessige strategier for subtraksjon og addisjon",
                "oppgave": "Regn ut 8 + 7 og 15 - 6 (Sjekk om eleven automatiserer eller teller på fingrene).",
                "iop_tiltak": "Eleven skal automatisere 10-er vennene muntlig og skriftlig, og bruke tallinje for pluss/minus opp til 20."
            },
            {
                "udir_maal": "kjenne igjen og beskrive mønstre",
                "oppgave": "Legg et mønster: Rød, blå, gul, rød, blå... Hva kommer neste?",
                "iop_tiltak": "Eleven skal kunne fortsette enkle mønstre med farger og former ved hjelp av konkreter."
            },
            {
                "udir_maal": "utforske måling av lengde og areal",
                "oppgave": "Hvor mange blyanter lang er pulten din?",
                "iop_tiltak": "Eleven skal øve på å måle lengder med ustandardiserte måleenheter (som hender, klosser eller skritt)."
            }
        ],
        "4": [
            {
                "udir_maal": "utforske og bruke multiplikasjon og divisjon i ulike situasjoner",
                "oppgave": "Hva er 6 x 7? / Hvor mange epler er det i 4 poser med 5 epler i hver?",
                "iop_tiltak": "Eleven skal forstå konseptet gjentatt addisjon (at 3x4 er 4+4+4) ved å tegne mengder, og automatisere 2-, 5- og 10-gangen."
            },
            {
                "udir_maal": "forstå posisjonssystemet og bruke strategier for addisjon/subtraksjon med flersifrede tall",
                "oppgave": "Regn ut 345 + 128 og 450 - 125 på papiret. Hvilken verdi har 4-tallet i 345?",
                "iop_tiltak": "Eleven skal trene på posisjonssystemet (enere, tiere, hundrere) ved bruk av penger eller klosser, og regne med enkle tresifrede tall uten tierovergang."
            },
            {
                "udir_maal": "utforske og beskrive brøk som del av en hel",
                "oppgave": "Tegn en sirkel, del den i fire like store deler, og fargelegg en fjerdedel (1/4).",
                "iop_tiltak": "Eleven skal kunne dele praktiske objekter (f.eks. en lekepizza eller et ark) i like store halvdeler og fjerdedeler, og navngi delene."
            },
            {
                "udir_maal": "lese av, plassere og beskrive tid",
                "oppgave": "Hva er klokka når den lille viseren er på 3 og den store på 12? Hva er klokka en halvtime senere?",
                "iop_tiltak": "Eleven skal lære seg hele og halve timer på analog klokke."
            },
            {
                "udir_maal": "beskrive egenskaper ved to- og tredimensjonale figurer",
                "oppgave": "Finn en figur med 3 hjørner. Hva heter den? Hva er forskjellen på et kvadrat og en kube?",
                "iop_tiltak": "Eleven skal kjenne igjen, navngi og beskrive sirkel, trekant, firkant og rektangel i hverdagen."
            }
        ],
        "7": [
            {
                "udir_maal": "bruke og beskrive brøk, desimaltall og prosent, og sammenhengen mellom dem",
                "oppgave": "Hva er 50% av 200 kr? Hvilket tall er størst av 0,5 og 1/4? Skriv 1/2 som desimaltall.",
                "iop_tiltak": "Eleven skal kunne koble vanlige prosenter (25%, 50%, 100%) og brøker (1/4, 1/2, 1/1) opp mot hverdagslige pengebeløp og tegninger."
            },
            {
                "udir_maal": "utforske og bruke formålstjenlige strategier for regning med brøk",
                "oppgave": "Regn ut 1/4 + 2/4. Hvordan tenker du her?",
                "iop_tiltak": "Eleven skal kunne legge sammen og trekke fra brøker med lik nevner ved hjelp av visuelle modeller."
            },
            {
                "udir_maal": "løse ligninger og ulikheter med én ukjent",
                "oppgave": "Finn x i ligningen: 2x + 4 = 10.",
                "iop_tiltak": "Eleven skal forstå likhetstegnet som en vekt, og finne manglende tall i enkle regnestykker (f.eks. 5 + _ = 12)."
            },
            {
                "udir_maal": "regne om mellom ulike måleenheter",
                "oppgave": "Hvor mange centimeter er 1,5 meter? Hvor mange gram er 2 kg?",
                "iop_tiltak": "Eleven skal kjenne til og bruke måleenhetene meter og centimeter, og vite at 1 meter er 100 cm."
            },
            {
                "udir_maal": "beregne areal og omkrets av todimensjonale figurer",
                "oppgave": "Et rektangel er 4 cm langt og 3 cm bredt. Hva er arealet? Hva er omkretsen?",
                "iop_tiltak": "Eleven skal kunne skille mellom areal og omkrets, og regne ut omkrets ved å legge sammen sidene."
            }
        ]
    },
    "norsk": {
        "2": [
            {
                "udir_maal": "leke med rim, rytme, bokstavlyder og stavelser",
                "oppgave": "Finn tre ord som rimer på 'katt'. Hvor mange stavelser er det i 'matpakke' (klapp stavelsene)?",
                "iop_tiltak": "Eleven skal trene på fonologisk bevissthet ved å klappe stavelser i kjente ord og finne enkle enderim."
            },
            {
                "udir_maal": "vise forståelse for sammenhengen mellom lyd og bokstav",
                "oppgave": "Hvilken lyd lager bokstaven 'S'? Finn en ting i rommet som starter på 'S'.",
                "iop_tiltak": "Eleven skal øve på å koble lyd og bokstav (grafem-fonem) for vokalene og de vanligste konsonantene (s, m, l, r)."
            },
            {
                "udir_maal": "lese store og små trykte bokstaver",
                "oppgave": "Pek på og si navnet/lyden på disse bokstavene: a, B, c, D, e, F.",
                "iop_tiltak": "Eleven skal trene på gjenkjenning av alfabetets små og store bokstaver gjennom spill og konkreter."
            },
            {
                "udir_maal": "skrive tekster for hånd og med tastatur",
                "oppgave": "Skriv navnet ditt og en kort setning (f.eks. 'Jeg liker is') på arket eller iPaden.",
                "iop_tiltak": "Eleven skal øve på funksjonelt blyantgrep og bokstavforming i sporingbøker, samt finne bokstavene på tastaturet."
            },
            {
                "udir_maal": "lese enkle tekster med sammenheng og forståelse",
                "oppgave": "Les denne korte teksten (f.eks. 'Sola skinner. Katten sover.'). Hva gjorde katten?",
                "iop_tiltak": "Eleven skal trene på avkoding av lydrette, to- og trebokstavsord (CVC-ord som sol, mus, bil)."
            }
        ],
        "4": [
            {
                "udir_maal": "lese med flyt og forståelse",
                "oppgave": "Les en alderstilpasset tekst høyt. (Sjekk lesehastighet og prosodi).",
                "iop_tiltak": "Eleven skal trene på leseflyt gjennom veiledet lesing og repetert lesing av korte, kjente tekster."
            },
            {
                "udir_maal": "finne informasjon i tekster og bruke den",
                "oppgave": "Les denne faktateksten om hunder. Hvor mange år kan en hund bli ifølge teksten?",
                "iop_tiltak": "Eleven skal øve på å finne spesifikk informasjon i enkle tekster ved hjelp av støttespørsmål («Hvem, hva, hvor?»)."
            },
            {
                "udir_maal": "skrive tekster med tydelig struktur",
                "oppgave": "Skriv en kort fortelling med en begynnelse, en hoveddel og en slutt.",
                "iop_tiltak": "Eleven skal bruke skriverammer (f.eks. tankekart eller 'først, etterpå, til slutt') for å strukturere egne tekster."
            },
            {
                "udir_maal": "bruke store bokstaver og punktum",
                "oppgave": "Rett opp denne setningen: 'i dag er det onsdag vi skal spille fotball'",
                "iop_tiltak": "Eleven skal konsekvent øve på å starte setninger med stor bokstav og avslutte med punktum i all skriving."
            },
            {
                "udir_maal": "samtale om regler for rettskriving og tegnsetting",
                "oppgave": "Hvordan skriver vi lyden /sj/ i ordet 'skjønner' eller 'kino'?",
                "iop_tiltak": "Eleven skal jobbe med høyfrekvente ord og enkle rettskrivingsregler (f.eks. dobbel konsonant ved kort vokal)."
            }
        ],
        "7": [
            {
                "udir_maal": "lese skjønnlitteratur og sakprosa med flyt og forståelse",
                "oppgave": "Les et utdrag fra en roman/avisartikkel. Gjenfortell hovedinnholdet med egne ord.",
                "iop_tiltak": "Eleven skal lese tilpasset litteratur daglig, og bruke strategier som å stoppe opp for å oppsummere handlingen."
            },
            {
                "udir_maal": "skrive fortellende, beskrivende og argumenterende tekster",
                "oppgave": "Skriv en kort argumenterende tekst: Hvorfor bør barn få være lenger oppe i helgene?",
                "iop_tiltak": "Eleven skal bruke skriverammer for å formulere én tydelig påstand og ett godt argument i skriftlig arbeid."
            },
            {
                "udir_maal": "bruke kilder på en kritisk og etterprøvbar måte",
                "oppgave": "Du skal skrive om klimaendringer. Hvordan vet du om nettsiden du leser er til å stole på?",
                "iop_tiltak": "Eleven skal kjenne til forskjellen på en pålitelig kilde (som SNL/fagbøker) og meninger/reklame på nett."
            },
            {
                "udir_maal": "beherske sentrale regler for rettskriving og tegnsetting",
                "oppgave": "Sett inn komma og punktum der det mangler, og rett opp ord-delingsfeil i teksten.",
                "iop_tiltak": "Eleven skal øve på orddeling, bruk av og/å, samt kommaregler ved oppramsing og bindeord."
            },
            {
                "udir_maal": "utforske og reflektere over hvordan tekster framstiller identitet",
                "oppgave": "Hva forteller språket i denne teksten om personen som har skrevet den?",
                "iop_tiltak": "Eleven skal trene på å beskrive hovedpersoners følelser og egenskaper i forenklede skjønnlitterære tekster."
            }
        ]
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const fagSelect = document.getElementById('fag-select');
    const trinnSelect = document.getElementById('trinn-select');
    const loadBtn = document.getElementById('load-btn');
    const kartleggingSection = document.getElementById('kartlegging-section');
    const kartleggingTitle = document.getElementById('kartlegging-title');
    const tasksContainer = document.getElementById('tasks-container');
    const generateBtn = document.getElementById('generate-btn');
    const resultSection = document.getElementById('result-section');
    const iopOutput = document.getElementById('iop-output');
    const resetBtn = document.getElementById('reset-btn');

    let currentTasks = [];

    loadBtn.addEventListener('click', () => {
        const selectedFag = fagSelect.value;
        const selectedTrinn = trinnSelect.value;
        
        // Hent data basert på valgt fag og trinn
        currentTasks = localDatabase[selectedFag][selectedTrinn];
        
        // Oppdater tittelen
        const fagNavn = selectedFag.charAt(0).toUpperCase() + selectedFag.slice(1);
        kartleggingTitle.innerText = `Kartlegging: ${fagNavn} (${selectedTrinn}. trinn)`;

        tasksContainer.innerHTML = '';
        
        currentTasks.forEach((task, index) => {
            const card = document.createElement('div');
            card.className = 'task-card';
            
            card.innerHTML = `
                <input type="checkbox" id="task-${index}" value="${index}">
                <div class="task-content">
                    <div class="udir-maal"><strong>Kompetansemål LK20:</strong> Mål om å ${task.udir_maal}</div>
                    <div class="oppgave-tekst"><strong>Kartlegging:</strong> ${task.oppgave}</div>
                </div>
            `;
            tasksContainer.appendChild(card);
        });

        kartleggingSection.classList.remove('hidden');
        resultSection.classList.add('hidden');
    });

    generateBtn.addEventListener('click', () => {
        let missingSkills = [];
        
        currentTasks.forEach((task, index) => {
            const checkbox = document.getElementById(`task-${index}`);
            // Vi ser etter de målene som IKKE er krysset av (ikke mestret)
            if (!checkbox.checked) {
                missingSkills.push(task);
            }
        });

        if (missingSkills.length === 0) {
            iopOutput.innerHTML = "<em>Fantastisk! Eleven mestrer alle kartlagte mål for dette trinnet. Ingen spesifikke IOP-mål nødvendig for disse områdene.</em>";
        } else {
            let outputText = "<strong>Foreslåtte IOP-mål basert på manglende mestring:</strong>\n\n";
            missingSkills.forEach(skill => {
                outputText += `• ${skill.iop_tiltak}\n\n`;
            });
            iopOutput.innerHTML = outputText;
        }

        resultSection.classList.remove('hidden');
        kartleggingSection.classList.add('hidden');
    });

    resetBtn.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        kartleggingSection.classList.add('hidden');
    });
});
