# Møte 11.01.2020

- Utgifter
  - Spørre girtz om kjøpe domene
  - Server/ cloud tjeneste
  - Kjøpe doemene uansett 

# Arkitektur

## Backend

- Deno typescript

## Database

- Avventes :D 

## Frontend

- React
  - Med PWA

### Voter features

- Cast vote
- Use websockets for realtime
- Login / authenticate using different options
  - No registration!
  - By link and token
  - QR code
  - Code (token?)
  - Phone number?
- See results of each vote if enabled by vote caster
- Can close and open app and persist session :D
- Must not get timed out after X seconds :D

### Admin panel features

- Create new vote session
  - Push vote to voters
    - Multiple or single
  - Create new vote
    - Types:
      - One vote on subject
      - Rankings
      - Multiple choice
  - Multiple votes in a vote session
    - Each vote can be differtent type ^
- Invites / joining
  - Invite people by email
  - Invite by SMS
  - Share link
  - Can be password or non password protected
  - Scan QR code
  - By code
- See casted votes results
  - Create PDF export
  - Mail result
  - CSV
- See current vote results in real time
  - WebSocket for realtime
  - Graphs?
  - Broadcast results?
- Login / Logout
- Profile
  - Change pw
  - Change email

### Vote features

- Title
- Description
  - Optional?
- Image
  - Optional?
- Vote blank
- Vote type
- Easy to understand what is voted on

### Vote session features

- Title
- Description
- List of questions
- Number of questions
- Progress bar of questions
  - Optional?
- Push vote to voters
  - Multiple or single
- View results
- Show statistics of session
  - Connected users
- Due time
- Default answer if due time expired

### System features

- Untracable votes
- Validated/verified users
- Multiple login services
  - Google
  - Facebook
  - Feide
  - Vipps
- Localization language
  - Norwegian
  - English
- Theming after users desire
  - Logo
  - Color

# Arbeid

- Timeplan/møtetid
  - Kjernetid 9-3
  - Lønsj 11.30
  - Prøve å jobbe på skolen om det går
- Ferie
  - Påskeferie Uke 13
    - "heldig" - Rolig uke
  - Melde om ferie så går det bra :D 
    - Helst litt før
- Møter
- Sprints
  - Standups
    - kl 12 (etter lønsj)
  - Hyppighet
    - Prøve på 1 Uke
      - Se tids brukt på planing
  - Skrive retor på GitHub / Wiki
  - Tom for arbeid?
    - Ok å begynne på en unplanned task, men bør unngås
    - Lage ny tasks for evt refactor / cleaning
  - Planning
    - https://github.com/jvandemo/github-scrum-workflow

# Git

- Struktur
  - Bruke GIT Flow
  - Commit message structure?
    - **Fix** bug in remote code
    - **Add** unit test for validation
    - **Update** dev dependecies
    - **Remove** old unused code
    - **Refactor** the best class there is
  - Rebasing before merging
    - CAN BE DANGEROUS IF MULTIPLE ARE WORKING ON SAME BRANCH AS WE ALTER HISTORY
    - To fix commit message
    - Squash, or delete commits
  - PRs 
    - Ha et generlt overblikk over PR 
    - Prøve å ta PR etter Standup kl 12
    - Sette opp Webhook mot discord for nye PR 
    - Takhøyde for å returnene PR om man oppdager feil
      - For å unngån altfor mye tidsbruk av lese ALL kode
    - 
  - Flere repos
    - Backend
    - Frontend
    - App
  - Issues
    - Bruke labels
      - Points
      - Bug
      - Fix
    - Lage template for issues

# Cloud 

- Azure
- Tar stillingtil tjenester senere
  - Which cloud service should we go for?
    - AWS, Google, Azure, DigitalOcean : combination?
  - Pricing?
    - Azure and AWS can be pricy
  - Student accounts?
    - AWS and Azure provides student accounts with credits
    - Google is cheap (almost Free) for low data usage
  - Docker?
  - App Serivce?
  - Virtual machines?

# Testing/ validering

- Helst forsøke å srkive tester i forkant før kode skrivin
  - TDD
- Unit testing (Single piece of code - class, function etc)
  - We need unit testing: select a framework for the language we are to use
  - Should be run on deployment
  - 
- Integration testing (Testing if things work together )
- GUI testing (Is the gui working on state change, looks alright, etc..)
  - Mostly manual process when creating
- API testing
  - POSTMAN
    - https://www.postman.com/automated-testing/
    - Can share a collection for API endpoints in a Colab group
      - Every one can access the same created endpoints
    - Can run automated tests
    - Variables
    - Testing localy
- GitHub Action
  - Used to run UnitTests
  - Used to run Style checks
  - Used before Integrate (Merge into Master)
    - Unit tests
    - Style check
    - Integration test
  - Used run after integrate to Deoply (Launch master on servers / ship new release)
