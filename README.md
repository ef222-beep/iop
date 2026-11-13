# IOP-Kartlegging App (Matematikk & Norsk)

Dette er en utvidet, serverløs webapplikasjon bygget i HTML, CSS og JavaScript for spesped-lærere.
Den inneholder nå et bredt utvalg av de viktigste kompetansemålene fra **LK20** i fagene matematikk og norsk for 2., 4. og 7. trinn.

## Oppdateringer i denne versjonen:
- **Fagvalg:** Du kan nå velge mellom Matematikk og Norsk i menyen.
- **Utvidet database:** Databasen i `app.js` inneholder nå ~30 representative LK20-mål, komplett med tilpassede kartleggingsoppgaver og skreddersydde SMART-mål for IOP.
- **Enkelt å redigere:** Hvis du vil legge til enda flere mål, åpner du bare `app.js` i en tekstredigerer og kopierer inn nye blokker i JSON-strukturen. Det krever ingen kodeerfaring.

## Slik publiserer du denne gratis på GitHub:
1. Opprett en gratis bruker på [GitHub](https://github.com).
2. Lag et nytt repository (f.eks. kalt `iop-app`).
3. Last opp disse fire filene (`index.html`, `style.css`, `app.js`, `README.md`) til ditt nye repository.
4. Gå til **Settings** -> **Pages** i GitHub-menyen.
5. Under "Build and deployment", velg **main** branch og trykk Save.
6. Etter et par minutter er appen din live på nettet (du får en lenke som ser ut som `https://dittbrukernavn.github.io/iop-app`).

Løsningen kjører utelukkende lokalt i nettleseren og er **100% GDPR-vennlig**.
