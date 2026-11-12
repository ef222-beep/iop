# IOP-Kartlegging App

Dette er en kodeløs / serverløs webapplikasjon bygget i HTML, CSS og JavaScript, beregnet for spesped-lærere som skal kartlegge elever og generere IOP-mål forankret i Kunnskapsløftet 2020 (LK20).

## Slik publiserer du denne gratis på GitHub:

1. Opprett en gratis bruker på [GitHub](https://github.com).
2. Lag et nytt repository (f.eks. kalt `iop-app`).
3. Last opp disse fire filene (`index.html`, `style.css`, `app.js`, `README.md`) til ditt nye repository.
4. Gå til **Settings** -> **Pages** i GitHub-menyen.
5. Under "Build and deployment", velg **main** branch og trykk Save.
6. Etter et par minutter er appen din live på nettet (du får en lenke som ser ut som `https://dittbrukernavn.github.io/iop-app`).

## Hvordan appen kommuniserer med Udir
Appen inneholder en `fetchUdirGoals()` funksjon i JavaScriptet som forsøker å hente LK20-kompetansemål direkte fra Udirs åpne Grep-API (`data.udir.no`). 

**Viktig om Udirs API:** Udir tilbyr *kompetansemålene*, men de tilbyr ikke *kartleggingsoppgavene* eller *IOP-tiltakene*. Derfor ligger det en lokaldatabase i `app.js` som kobler Udirs kompetansemål mot dine spesifikke oppgaver og forslag til SMART-mål. Dersom nettleseren blokkerer api-kallet til Udir (CORS-restriksjoner), sørger appen for at systemet likevel fungerer sømløst ved å hente fra den innebygde databasen. 

Alt skjer lokalt i nettleseren til brukeren, så løsningen er **100% GDPR-vennlig**.
