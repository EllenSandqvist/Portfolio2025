import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isActive, setActiveProjectId }) => {
  const handleActivate = () => setActiveProjectId(project.id);
  const handleDeactivate = () => setActiveProjectId(null);

  return (
    <div className={`${styles.project_card} ${isActive ? styles.active : ""}`}>
      <div className={styles.project_title_tab}>
        <h4>{project.title}</h4>
      </div>
      <img
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleActivate();
        }}
        src={project.img}
        alt={`Screenshot of ${project.title}`}
        onClick={handleActivate}
        onMouseEnter={handleActivate}
      />

      {isActive && (
        <div
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Escape") handleDeactivate();
          }}
          className={styles.project_info_view}
          onMouseLeave={handleDeactivate}
          onClick={handleDeactivate}
          role="region"
          aria-label={`Details about ${project.title}`}
        >
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
            <a
              className={styles.link_btn}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo för ${project.title}`}
            >
              Live demo
              <LuExternalLink />
            </a>

            <a
              className={styles.link_btn}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Github repo för ${project.title}`}
            >
              Github Repo
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
