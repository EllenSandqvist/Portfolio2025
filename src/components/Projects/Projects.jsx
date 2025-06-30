import { useState } from "react";

import styles from "./Projects.module.css";

import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import projectsData from "../../data/projects.js";

const Work = () => {
  const [activeTab, setActiveTab] = useState("own");
  const [activeProjectId, setActiveProjectId] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "own":
        return (
          <>
            {projectsData.ownProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProjectId === project.id}
                setActiveProjectId={setActiveProjectId}
              />
            ))}
          </>
        );
      case "collab":
        return (
          <>
            {projectsData.collaborations.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={activeProjectId === project.id}
                setActiveProjectId={setActiveProjectId}
              />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.projects} id="work">
      <h2>PROJEKT</h2>
      <div className={styles.tab_container}>
        <button
          className={`${styles.tab} ${
            activeTab === "own" ? styles.tab_active : ""
          }`}
          onClick={() => setActiveTab("own")}
        >
          <h3>EGNA PROJEKT</h3>
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "collab" ? styles.tab_active : ""
          }`}
          onClick={() => setActiveTab("collab")}
        >
          <h3>SAMARBETEN</h3>
        </button>
      </div>
      <div className={styles.project_content}>{renderContent()}</div>
    </section>
  );
};

export default Work;
