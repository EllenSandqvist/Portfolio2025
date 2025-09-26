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
      technologies: "kanban.technologies",
    },
    {
      id: 2,
      title: "tictactoe.title",
      description: "tictactoe.description",
      midDescription: "tictactoe.midDescription",
      detailedDescription: "tictactoe.detailedDescription",
      img: tictactoe,
      repo: "https://github.com/EllenSandqvist/TicTacToe.git",
      liveDemo: "https://tictactoe3-5-7.netlify.app/",
      technologies: "tictactoe.technologies",
    },
    {
      id: 3,
      title: "dashboard.title",
      description: "dashboard.description",
      midDescription: "dashboard.midDescription",
      detailedDescription: "dashboard.detailedDescription",
      img: dashboard,
      repo: "https://github.com/EllenSandqvist/Dashboard.git",
      liveDemo: "https://dashboarden.netlify.app/",
      technologies: "dashboard.technologies",
    },
    {
      id: 4,
      title: "memory.title",
      description: "memory.description",
      midDescription: "memory.midDescription",
      detailedDescription: "memory.detailedDescription",
      img: memory,
      repo: "https://github.com/EllenSandqvist/memory.git",
      liveDemo: "https://solo-memory-game.netlify.app/",
      technologies: "memory.technologies",
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
      technologies: "mortgageCalculator.technologies",
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
      technologies: "mathleteCamp.technologies",
    },
  ],
  collaborations: [
    {
      id: 1,
      title: "rently.title",
      description: "rently.description",
      midDescription: "rently.midDescription",
      detailedDescription: "rently.detailedDescription",
      img: rently,
      repo: "https://github.com/EllenSandqvist/Rently",
      liveDemo: "https://rently-app.netlify.app/",
      technologies: "rently.technologies",
    },
    {
      id: 2,
      title: "kanbanApp.title",
      description: "kanbanApp.description",
      midDescription: "kanbanApp.midDescription",
      detailedDescription: "kanbanApp.detailedDescription",
      img: kanbanCollab,
      repo: "https://github.com/EllenSandqvist/MathleteCamp.git",
      liveDemo: "https://kanban-kollab.netlify.app/",
      technologies: "kanbanApp.technologies",
    },
    {
      id: 3,
      title: "quire.title",
      description: "quire.description",
      midDescription: "quire.midDescription",
      detailedDescription: "quire.detailedDescription",
      img: quire,
      repo: "https://github.com/EllenSandqvist/Quire",
      liveDemo: "https://quire-app.netlify.app/",
      technologies: "quire.technologies",
    },
  ],
};

export default projectsData;
