import board from "../assets/board.png";
import tictactoe from "../assets/tictactoe.png";
import memory from "../assets/memory.png";
import mortage from "../assets/mortage.png";
import mattematchen from "../assets/mattematchen.png";
import dashboard from "../assets/dashboard.png";
import kanbanCollab from "../assets/kanban_collab.png";
import quire from "../assets/quire.png";
import rently from "../assets/rently.png";

const projectsData = {
  ownProjects: [
    {
      id: 1,
      title: "Kanban Board",
      description:
        "Kanban-app med modulär design där användaren kan skapa, redigera och flytta uppgifter mellan kolumner, antingen med drag-and-drop eller med pilknappar för bättre tillgänglighet.",
      midDescription:
        "Projektet är byggt i React. Modulär komponentarkitektur gör koden återanvändbar och lätt att underhålla. Interaktiva modaler används för redigering av uppgifter. Data sparas i localStorage för att bevara inställningar mellan besök.",
      detailedDescription:
        "Responsiv design säkerställer en smidig upplevelse på både mobil och desktop, och tillgänglighetslösningar som pilknappar kompletterar drag-and-drop för att alla användare ska kunna hantera uppgifter effektivt.",
      img: board,
      repo: "https://github.com/EllenSandqvist/Kanban.git",
      liveDemo: "https://task-flow-board.netlify.app/",
      technologies: [
        "React",
        "React Context",
        "Vite",
        "React Router",
        "Drag and drop API",
      ],
    },
    {
      id: 2,
      title: "TicTacToe",
      description:
        "Tic-Tac-Toe för två spelare i React och TypeScript med tre brädstorlekar. Vinnaren räknas ut automatiskt och spelet erbjuder en intuitiv spelupplevelse.",
      midDescription:
        "Projektet demonstrerar modern användning av TypeScript i React, med tydliga typdeklarationer och export av globala typer. Spelet erbjuder tre olika brädstorlekar där vinstkraven anpassas för varje bräde och vinnaren räknas ut automatiskt.",
      detailedDescription:
        "UI/UX är utformad för att ge en enkel och överskådlig spelupplevelse för två spelare, med tydlig visuell återkoppling vid varje drag och markering av den vinnande raden när spelet är över.",
      img: tictactoe,
      repo: "https://github.com/EllenSandqvist/TicTacToe.git",
      liveDemo: "https://tictactoe3-5-7.netlify.app/",
      technologies: [
        "React",
        "Component Architecture",
        "TypeScript",
        "State Management",
      ],
    },
    {
      id: 3,
      title: "Dashboard",
      description:
        "Personlig dashboard med anpassningsbara moduler och info hämtad från externa API:er. Lägg till länkar, se väder, skriv anteckningar, byt bakgrundsbild m.m.",
      midDescription:
        "Dashboarden innehåller redigerbara rubriker och en realtidsuppdaterad klocka, samt moduler för länkar, anteckningar och väder som kan anpassas av användaren. All information sparas i LocalStorage så att inställningar och anteckningar bevaras mellan besök.",
      detailedDescription:
        "Projektet använder flera API:er, bland annat för väder och bakgrundsbilder, och visar hur olika typer av data kan presenteras på ett användarvänligt sätt.",
      img: dashboard,
      repo: "https://github.com/EllenSandqvist/Dashboard.git",
      liveDemo: "https://dashboarden.netlify.app/",
      technologies: [
        "JavaScript",
        "External APIs",
        "LocalStorage",
        "Responsive Design",
      ],
    },
    {
      id: 4,
      title: "Memory",
      description:
        "Memory i JavaScript för en spelare med animerade kortvändningar. Spelet är enkelt och intuitivt, vilket gör det lätt att fokusera på minnesutmaningen.",
      midDescription:
        "Projektet är byggt i vanilla JavaScript med tydlig funktionsindelning. Spellogik, poängräkning och UI-uppdateringar hanteras i separata funktioner, och DOM-manipulation används för att dynamiskt generera kort.",
      detailedDescription:
        "CSS-transformationer och animationer skapar en engagerande visuell flip-effekt. Responsiv design gör att spelet fungerar smidigt på alla skärmstorlekar, och interaktiv feedback ges genom modaler och poängräkning efter varje drag.",

      img: memory,
      repo: "https://github.com/EllenSandqvist/memory.git",
      liveDemo: "https://solo-memory-game.netlify.app/",
      technologies: [
        "JavaScript",
        "Responsive Design",
        "Animations",
        "Dynamic UI",
      ],
    },
    {
      id: 5,
      title: "Bolånekalkylator",
      description:
        "Bolånekalkylator i TypeScript som beräknar månadskostnad utifrån lånebelopp, ränta och återbetalningstid och genererar en amorteringsplan.",
      midDescription:
        "Projektet är utvecklat i TypeScript för att dra nytta av strikt typning och förbättrad kodkvalitet. En egen typ (Loan) används för att beskriva låneobjektet, och applikationen validerar användarens inmatning med tydliga gränsvärden innan beräkningar görs.",
      detailedDescription:
        "Månadskostnaden beräknas med annuitetsformeln, och en amorteringsplan genereras dynamiskt. Tabellens rader visar hur amortering, räntekostnad och återstående skuld förändras månad för månad. Projektet visar tydlig funktionsindelning, strukturerad DOM-manipulation och användning av typning för att bygga en robust och användarvänlig kalkylator.",
      img: mortage,
      repo: "https://github.com/EllenSandqvist/Mortgage-Calculator.git",
      liveDemo: "https://my-mortage-calculator.netlify.app/",
      technologies: [
        "TypeScript",
        "Input Validation",
        "Financial Calculations",
      ],
    },
    {
      id: 6,
      title: "Matte-Matchen",
      description:
        "Mattespel i JavaScript med fotbollstema för barn som tränar addition och subtraktion. Efter en lyckad om gång visas en slumpmässig bild på en spelare från favoritlaget.",
      midDescription:
        "Projektet är byggt i modulär vanilla JavaScript med tydligt uppdelade funktioner för spellogik, poäng och UI-uppdateringar, vilket underlättar underhåll och vidareutveckling. DOM-manipulation används för att dynamiskt generera frågor, uppdatera poäng och visa feedback.",
      detailedDescription:
        "Vid framgångsrika omgångar hämtas slumpmässiga bilder på spelare från användarens favoritlag via TheSportsDB API, vilket skapar ett extra visuellt inslag som kan motivera till fler omgångar.",
      img: mattematchen,
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: [
        "JavaScript",
        "External APIs",
        "Dynamic UI",
        "Modular Architecture",
      ],
    },
  ],
  collaborations: [
    {
      id: 1,
      title: "Rently (uthyrningsplattform)",
      description:
        "Plattform byggd i Vue där användare kan hyra och hyra ut föremål. Användaren kan lägga upp föremål för uthyrning samt filtrera, söka och boka andra användares föremål.",
      midDescription:
        "Appen är ett skolprojekt där mitt bidrag främst var användarautentisering (registrering, in- och utloggning), att sätta upp store med Pinia och funktionalitet för att lägga upp nya föremål för uthyrning.",
      detailedDescription:
        "Applikationen använder modulära Vue-komponenter med Vue Router för navigering. Funktioner omfattar CRUD-operationer på användare, föremål och bokningar, användarautentisering (registrering, in- och utloggning), samt upplägg av nya föremål för uthyrning. En kalenderfunktion gör det enkelt för användare att välja hyrdatum. Data hanteras via Pinia store och lagras/uppdateras i JSONBin, vilket ger en strukturerad och responsiv lösning med fokus på användarvänlighet.",
      img: rently,
      repo: "https://github.com/EllenSandqvist/Rently",
      liveDemo: "https://rently-app.netlify.app/",
      technologies: [
        "Vue.js",
        "Composition API",
        "Pinia",
        "Vue Router",
        "JSONBin",
        "User Auth.",
      ],
    },
    {
      id: 2,
      title: "Kanban App",
      description:
        "Kanban-app i React och Redux för effektiv projektplanering. Användare kan skapa, flytta och hantera uppgifter, sätta deadlines, koppla team-medlemmar m.m.",
      midDescription:
        "Appen är ett skolprojekt inspirerat av Trello. Fokus låg på Redux för effektiv state management och återanvändbara komponenter. Projektet innehåller custom hooks för drag-and-drop samt för hantering av aktiv användare och användarinställningar.",
      detailedDescription:
        "UI är uppbyggt med modulära React-komponenter som kan återanvändas och enkelt underhållas. Uppgifter kan ges start- och slutdatum, tilldelas till olika användare samt flyttas mellan kolumner med drag-and-drop eller genom menyval. Alla data, inklusive kolumner, uppgifter och användare, hanteras via Redux och sparas i localStorage för att bibehålla användarens information mellan sidladdningar. Appen erbjuder även personliga färginställningar som sparas lokalt för varje användare.",
      img: kanbanCollab,
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://kanban-kollab.netlify.app/",
      technologies: [
        "React",
        "Redux",
        "React Router",
        "Custom Hooks",
        "CSS Modules",
      ],
    },
    {
      id: 3,
      title: "Quire",
      description:
        "Quire är en digital anteckningsbok. Användare kan skapa, redigera och favoritmarkera anteckningar. Appen kan anpassas genom val av färger, typsnitt, textstorlek m.m.",
      midDescription:
        "Projektet i VanillaJS har responsiv design och semantisk HTML. Användaren kan formatera anteckningarna med rubriker, punktlistor, kursiv- och fetstil samt lägga in bilder. All data sparas i localStorage och Google Analytics används för grundläggande användarstatistik.",
      detailedDescription:
        "Mitt huvudansvar var textformateringen som utvecklades utan deprecated metoder som execCommand. Appen visar en informationssida vid första besöket, har skapandedatum för anteckningar, en utskriftsfunktion som exkluderar menyer och verktygskontroller, samt stöd för sökning bland anteckningar.",
      img: quire,
      repo: "https://github.com/EllenSandqvist/Quire",
      liveDemo: "https://quire-app.netlify.app/",
      technologies: [
        "VanillaJS",
        "Google Analytics",
        "Text formatting",
        "LocalStorage",
      ],
    },
    // {
    //   id: 4,
    //   title: "Test3",
    //   description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
    //   detailedDescription: "",
    //   img: "https://picsum.photos/300/350",
    //   repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
    //   liveDemo: "https://mathletecamp.netlify.app/",
    //   technologies: ["JavaScript"],
    // },
  ],
};

export default projectsData;
