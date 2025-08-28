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
      detailedDescription:
        "Projektet är byggt med React och Context API, med modulär komponentarkitektur som gör koden återanvändbar och lätt att underhålla. Interaktiva modaler används för uppgiftsredigering, och all data sparas i localStorage för att bevara användarinställningar mellan besök. Responsiv design säkerställer en smidig upplevelse på både mobil och desktop, och tillgänglighetslösningar som pilknappar kompletterar drag-and-drop för att alla användare ska kunna hantera uppgifter effektivt.",
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
        "Tic-Tac-Toe för två spelare byggt i React och TypeScript med tre olika brädstorlekar. Spelet räknar automatiskt ut vinnaren och erbjuder en tydlig och användarvänlig upplevelse.",
      detailedDescription:
        "Projektet demonstrerar modern användning av TypeScript i React, med tydliga typdeklarationer och export av globala typer. Spelet erbjuder tre olika brädstorlekar (3x3, 5x5, 7x7) där vinstkraven anpassas för varje bräde och vinnaren räknas ut automatiskt. UI/UX är utformad för att ge en enkel och överskådlig spelupplevelse för två spelare, med tydlig visuell återkoppling vid varje drag och markering av den vinnande raden när spelet är över.",
      img: tictactoe,
      repo: "https://github.com/EllenSandqvist/TicTacToe.git",
      liveDemo: "https://tictactoe3-5-7.netlify.app/",
      technologies: [
        "React",
        "State Management",
        "TypeScript",
        "Component Architecture",
      ],
    },
    {
      id: 3,
      title: "Dashboard",
      description:
        "Personlig dashboard med anpassningsbara moduler och info hämtad från externa API:er. Lägg till länkar, se väder, skriv anteckningar, byt bakgrundsbild m.m.",
      detailedDescription:
        "Dashboarden innehåller redigerbara rubriker och en realtidsuppdaterad klocka, samt moduler för länkar, anteckningar och väder som kan anpassas av användaren. All information sparas i LocalStorage så att inställningar och anteckningar bevaras mellan besök. Projektet använder flera API:er, bland annat för väder och bakgrundsbilder, och visar hur olika typer av data kan presenteras på ett användarvänligt sätt.",
      img: dashboard,
      repo: "https://github.com/EllenSandqvist/Dashboard.git",
      liveDemo: "https://dashboarden.netlify.app/",
      technologies: [
        "JavaScript",
        "External APIs",
        "LocalStorage",
        "Responsive Design",
        "Dynamic UI",
      ],
    },
    {
      id: 4,
      title: "Memory",
      description:
        "Memoryspel för en spelare byggt i JavaScript med kortvändningsanimationer. Spelet är enkelt och intuitivt, vilket gör det lätt att fokusera på minnesutmaningen.",
      detailedDescription:
        "Projektet är byggt i modulär vanilla JavaScript med tydlig funktionsindelning. Spellogik, poängräkning och UI-uppdateringar hanteras i separata funktioner. DOM-manipulation används för att dynamiskt generera kort och uppdatera poäng, medan CSS-transformationer och animationer skapar en engagerande visuella flip-effekt. Responsiv design gör att spelet fungerar smidigt på alla skärmstorlekar, och interaktiv feedback ges genom modaler och poängräkning efter varje drag.",
      img: memory,
      repo: "https://github.com/EllenSandqvist/memory.git",
      liveDemo: "https://solo-memory-game.netlify.app/",
      technologies: [
        "JavaScript",
        "Animations",
        "Dynamic UI",
        "Responsive Design",
        "Modular code",
      ],
    },
    {
      id: 5,
      title: "Bolånekalkylator",
      description:
        "Bolånekalkylator i TypeScript som beräknar månadskostnad utifrån lånebelopp, ränta och återbetalningstid och genererar en amorteringsplan.",
      detailedDescription:
        "Projektet är utvecklat i TypeScript för att dra nytta av strikt typning och förbättrad kodkvalitet. En egen typ (Loan) används för att beskriva låneobjektet, vilket gör beräkningar och validering mer förutsägbara. Applikationen validerar användarens inmatning med tydliga gränsvärden innan beräkningar görs, vilket minimerar fel och säkerställer realistiska scenarier. Den månatliga kostnaden beräknas med annuitetsformeln, och en amorteringsplan genereras dynamiskt. Tabellens rader visar hur amortering, räntekostnad och återstående skuld förändras månad för månad. Projektet visar tydlig funktionsindelning, strukturerad DOM-manipulation och användning av typning för att bygga en robust och användarvänlig kalkylator.",
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
        "Mattespel i JavaScript med fotbollstema för barn som tränar addition och subtraktion. Vid många rätt visas en slumpmässig bild på en spelare från favoritlaget.",
      detailedDescription:
        "Projektet är byggt i modulär vanilla JavaScript med tydlig funktionsindelning som underlättar underhåll och vidareutveckling. Spellogik, poängräkning och UI-uppdateringar hanteras i separata funktioner. DOM-manipulation används för att dynamiskt generera frågor, uppdatera poäng och visa modaler med feedback. Vid framgångsrika omgångar hämtas slumpmässiga bilder på spelare från användarens favoritlag via TheSportsDB API, vilket skapar ett extra visuellt inslag som kan motivera till fler omgångar.",
      img: mattematchen,
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: [
        "JavaScript",
        "External APIs",
        "Dynamic UI",
        "Modular architecture",
      ],
    },
  ],
  collaborations: [
    {
      id: 1,
      title: "Rently",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      detailedDescription: "",
      img: rently,
      repo: "https://github.com/EllenSandqvist/Rently",
      liveDemo: "https://rently-app.netlify.app/",
      technologies: ["Vue"],
    },
    {
      id: 2,
      title: "Kanban App",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      detailedDescription: "",
      img: kanbanCollab,
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://kanban-kollab.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 3,
      title: "Quire",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      detailedDescription: "",
      img: quire,
      repo: "https://github.com/EllenSandqvist/Quire",
      liveDemo: "https://quire-app.netlify.app/",
      technologies: ["JavaScript", "Google Analytics"],
    },
    {
      id: 4,
      title: "Test3",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      detailedDescription: "",
      img: "https://picsum.photos/300/350",
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: ["JavaScript"],
    },
  ],
};

export default projectsData;
