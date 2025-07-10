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
        "Kanban-app med drag-och-släpp-funktion, modal för redigering och context-baserad statehantering. Användaren kan skapa, flytta och hantera uppgifter i olika kolumner.",
      img: board,
      repo: "https://github.com/EllenSandqvist/Kanban.git",
      liveDemo: "https://task-flow-board.netlify.app/",
      technologies: [
        "React",
        "React Context",
        "React Router",
        "Drag and drop API",
      ],
    },
    {
      id: 2,
      title: "TicTacToe",
      description:
        "Tic-Tac-Toe i React och TypeScript med valbar brädstorlek och automatisk vinstkontroll.",
      img: tictactoe,
      repo: "https://github.com/EllenSandqvist/TicTacToe.git",
      liveDemo: "https://tictactoe3-5-7.netlify.app/",
      technologies: ["React", "TypeScript"],
    },
    {
      id: 3,
      title: "Dashboard",
      description: " ",
      img: dashboard,
      repo: "https://github.com/EllenSandqvist/Dashboard.git",
      liveDemo: "https://dashboarden.netlify.app/",
      technologies: [
        "JavaScript",
        "Unsplash API",
        "OpenWeatherMap API",
        "QuoteSlate API",
        "localStorage",
      ],
    },
    {
      id: 4,
      title: "Memory",
      description:
        "Memoryspel för en spelare byggt i vanilla JavaScript med kortvändningsanimationer.",
      img: memory,
      repo: "https://github.com/EllenSandqvist/memory.git",
      liveDemo: "https://solo-memory-game.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 5,
      title: "Bolånekalkylator",
      description:
        "Bolånekalkylator i React med TypeScript. Användaren matar in lånebelopp, räntesats och lånetid - kalkylatorn räknar ut månadskostnad, räntekostnad och en amorteringsplan.",
      img: mortage,
      repo: "https://github.com/EllenSandqvist/Mortgage-Calculator.git",
      liveDemo: "https://my-mortage-calculator.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 6,
      title: "Matte-Matchen",
      description:
        "Mattespel i vanilla JavaScript med fotbollstema, anpassat för barn som tränar addition och subtraktion. Spelet är byggt med fokus på tydlig återkoppling och enkel UX anpassad för barn i lågstadieåldern.",
      img: mattematchen,
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: ["JavaScript", "TheSportsDB API", "ES Modules"],
    },
  ],
  collaborations: [
    {
      id: 1,
      title: "Rently",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      img: rently,
      repo: "https://github.com/EllenSandqvist/Rently",
      liveDemo: "https://rently-app.netlify.app/",
      technologies: ["Vue"],
    },
    {
      id: 2,
      title: "Kanban App",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      img: kanbanCollab,
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://kanban-kollab.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 3,
      title: "Quire",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      img: quire,
      repo: "https://github.com/EllenSandqvist/Quire",
      liveDemo: "https://quire-app.netlify.app/",
      technologies: ["JavaScript", "Google Analytics"],
    },
    {
      id: 4,
      title: "Test3",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      img: "https://picsum.photos/300/350",
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: ["JavaScript"],
    },
  ],
};

export default projectsData;
