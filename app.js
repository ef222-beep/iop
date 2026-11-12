// Database over oppgaver og IOP-tiltak. 
// Siden Udir API kun gir kompetansemålene (ikke kartleggingsoppgavene), 
// kobler vi Udirs offisielle mål mot dine praktiske oppgaver her.

const localDatabase = {
    "2": [
        {
            "udir_kode": "Mål 1 (2. trinn)",
            "udir_maal": "ordne tall, mengder og former ut fra egenskaper",
            "oppgave": "Sorter tallene 45, 12, 89, 34 fra minst til størst.",
            "iop_tiltak": "Eleven skal kunne sortere tall opp til 100 i riktig rekkefølge ved bruk av tallinje."
        },
        {
            "udir_kode": "Mål 2 (2. trinn)",
            "udir_maal": "utvikle og bruke hensiktsmessige strategier for subtraksjon og addisjon",
            "oppgave": "Hva er 8 + 7 og 15 - 6? (Sjekk om eleven automatiserer eller teller på fingrene)",
            "iop_tiltak": "Eleven skal automatisere 10-er vennene muntlig og skriftlig.\n- Eleven skal regne pluss og minus opp til 20 ved bruk av konkreter."
        }
    ],
    "4": [
        {
            "udir_kode": "Mål 1 (4. trinn)",
            "udir_maal": "utforske og bruke multiplikasjon og divisjon",
            "oppgave": "Hva er 6 x 7? / Hvor mange epler er det i 4 poser med 5 epler i hver?",
            "iop_tiltak": "Eleven skal forstå konseptet gjentatt addisjon (at 3x4 er 4+4+4) ved å tegne mengder.\n- Eleven skal automatisere 2-gangen og 5-gangen."
        },
        {
            "udir_kode": "Mål 2 (4. trinn)",
            "udir_maal": "utforske og beskrive brøk som del av en hel",
            "oppgave": "Tegn en sirkel, del den i fire, og fargelegg en fjerdedel (1/4).",
            "iop_tiltak": "Eleven skal kunne dele praktiske objekter (f.eks. lekepizza) i like store halvdeler og fjerdedeler, og navngi delene."
        }
    ],
    "7": [
        {
            "udir_kode": "Mål 1 (7. trinn)",
            "udir_maal": "bruke og beskrive brøk, desimaltall og prosent",
            "oppgave": "Hva er 50% av 200 kr? Hvilket tall er størst av 0,5 og 1/4?",
            "iop_tiltak": "Eleven skal kunne koble vanlige prosenter (25%, 50%, 100%) opp mot hverdagslige pengebeløp."
        }
    ]
};

// Funksjon for å hente mål direkte fra Udir (Grep API)
// Siden GREP API kan ha CORS-restriksjoner fra nettleseren, har vi fallback til lokale data.
async function fetchUdirGoals() {
    try {
        console.log("Forsøker å hente LK20 mål fra Udir API...");
        // Dette er et eksempel-endepunkt for Udir sitt åpne API for matematikk.
        const response = await fetch('https://data.udir.no/kl06/v201906/laereplaner/mat01-05', {
            headers: { 'Accept': 'application/json' }
        });
        
        if (!response.ok) {
            throw new Error('Kunne ikke koble til Udir API');
        }
        
        const data = await response.json();
        console.log("Suksess! Data hentet fra Udir:", data);
        // I en fullskala app ville vi her parset JSON-LD responsen fra Udir 
        // og overskrevet 'udir_maal' feltene i databasen vår med 100% ferske tekster.
        return true; 
    } catch (error) {
        console.warn("Udir API blokkert (CORS) eller nede. Bruker innebygd LK20-database.", error);
        return false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const trinnSelect = document.getElementById('trinn-select');
    const loadBtn = document.getElementById('load-btn');
    const kartleggingSection = document.getElementById('kartlegging-section');
    const tasksContainer = document.getElementById('tasks-container');
    const generateBtn = document.getElementById('generate-btn');
    const resultSection = document.getElementById('result-section');
    const iopOutput = document.getElementById('iop-output');
    const resetBtn = document.getElementById('reset-btn');

    let currentTasks = [];

    // Laster inn oppgavene og sjekker Udir API i bakgrunnen
    loadBtn.addEventListener('click', async () => {
        await fetchUdirGoals(); // Henter mål fra Udir (eller bruker fallback)
        
        const selectedTrinn = trinnSelect.value;
        currentTasks = localDatabase[selectedTrinn];
        
        tasksContainer.innerHTML = '';
        
        currentTasks.forEach((task, index) => {
            const card = document.createElement('div');
            card.className = 'task-card';
            
            card.innerHTML = `
                <input type="checkbox" id="task-${index}" value="${index}">
                <div class="task-content">
                    <div class="udir-maal"><strong>LK20 Kompetansemål:</strong> ${task.udir_maal}</div>
                    <div class="oppgave-tekst"><strong>Kartleggingsoppgave:</strong> ${task.oppgave}</div>
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
                outputText += `• ${skill.iop_tiltak}\n`;
            });
            iopOutput.innerHTML = outputText;
        }

        resultSection.classList.remove('hidden');
        kartleggingSection.classList.add('hidden');
    });

    resetBtn.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        kartleggingSection.classList.add('hidden');
        trinnSelect.value = "2";
    });
});
