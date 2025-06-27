import { useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  //Used for mobile devices to toggle card state:
  const [isActive, setIsActive] = useState(false);

  const toggleInfo = (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      return;
    }

    if (window.innerWidth <= 768) {
      setIsActive((prev) => !prev);
    }
  };

  return (
    <div
      className={`${styles.project_card} ${isActive ? styles.active : ""}`}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className={styles.project_title_tab}>
        <h4>{project.title}</h4>
      </div>
      <img src={project.img} alt="Project preview" onClick={toggleInfo} />

      <div className={styles.project_info_view} onClick={toggleInfo}>
        <div className={styles.project_description}>
          <p>{project.description}</p>
          <div className={styles.tech_container}>
            {project.technologies.map((tech, index) => (
              <span key={tech + index} className={styles.tech_chip}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.project_links_container}>
          <p>
            <a
              className={styles.link_btn}
              href={project.liveDemo}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              Live demo
              <LuExternalLink />
            </a>
          </p>
          <p>
            <a
              className={styles.link_btn}
              href={project.repo}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              Github Repo
              <FaGithub />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
