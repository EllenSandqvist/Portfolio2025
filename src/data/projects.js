import board from "../assets/board.png";
import tictactoe from "../assets/tictactoe.png";

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
      img: "https://picsum.photos/400/300",
      repo: "https://github.com/EllenSandqvist/Dashboard.git",
      liveDemo: " ",
      technologies: ["JavaScript", "Unsplash API"],
    },
    {
      id: 4,
      title: "Memory",
      description:
        "Memoryspel för en spelare byggt i vanilla JavaScript med kortvändningsanimationer.",
      img: "https://picsum.photos/460/330",
      repo: "https://github.com/EllenSandqvist/memory.git",
      liveDemo: "https://solo-memory-game.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 5,
      title: "Bolånekalkylator",
      description:
        "Bolånekalkylator i React med TypeScript. Användaren matar in lånebelopp, räntesats och lånetid - kalkylatorn räknar ut månadskostnad, räntekostnad och en amorteringsplan.",
      img: "https://picsum.photos/460/330",
      repo: "https://github.com/EllenSandqvist/Mortgage-Calculator.git",
      liveDemo: "https://my-mortage-calculator.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 6,
      title: "Mathlete Camp",
      description:
        "Mattespel i vanilla JavaScript med fotbollstema, anpassat för barn som tränar addition och subtraktion.",
      img: "https://picsum.photos/460/330",
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: ["JavaScript"],
    },
  ],
  collaborations: [
    {
      id: 1,
      title: "Test",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      img: "https://picsum.photos/300/350",
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 2,
      title: "Test2",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      img: "https://picsum.photos/300/350",
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: ["JavaScript"],
    },
    {
      id: 3,
      title: "Quire",
      description: "blala ldf sldks fkjös dkf oe ewirjwo eir j",
      img: "https://picsum.photos/300/350",
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://mathletecamp.netlify.app/",
      technologies: ["JavaScript"],
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
