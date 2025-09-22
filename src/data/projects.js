import board from "../assets/board.png";
import tictactoe from "../assets/tictactoe.png";
import memory from "../assets/memory.png";
import mortgage from "../assets/mortgage.png";
import mattematchen from "../assets/mattematchen.png";
import dashboard from "../assets/dashboard.png";
import kanbanCollab from "../assets/kanban_collab.png";
import quire from "../assets/quire.png";
import rently from "../assets/rently.png";

const projectsData = {
  ownProjects: [
    {
      id: 1,
      title: "kanban.title",
      description: "kanban.description",
      midDescription: "kanban.midDescription",
      detailedDescription: "kanban.detailedDescription",
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
      description: "tictactoe.description",
      midDescription: "tictactoe.midDescription",
      detailedDescription: "tictactoe.detailedDescription",
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
      description: "dashboard.description",
      midDescription: "dashboard.midDescription",
      detailedDescription: "dashboard.detailedDescription",
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
      description: "memory.description",
      midDescription: "memory.midDescription",
      detailedDescription: "memory.detailedDescription",
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
      title: "mortgageCalculator.title",
      description: "mortgageCalculator.description",
      midDescription: "mortgageCalculator.midDescription",
      detailedDescription: "mortgageCalculator.detailedDescription",
      img: mortgage,
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
      title: "mathleteCamp.title",
      description: "mathleteCamp.description",
      midDescription: "mathleteCamp.midDescription",
      detailedDescription: "mathleteCamp.detailedDescription",
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
        "Appen använder modulära Vue-komponenter med Vue Router för navigering. Funktioner omfattar CRUD-operationer på användare, föremål och bokningar, användarautentisering (registrering, in- och utloggning), samt upplägg av nya föremål för uthyrning. En kalenderfunktion gör det enkelt för användare att välja hyrdatum. Data hanteras via Pinia store och lagras/uppdateras i JSONBin, vilket ger en strukturerad och responsiv lösning med fokus på användarvänlighet.",
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
  ],
};

export default projectsData;
