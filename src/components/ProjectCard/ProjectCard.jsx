import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isActive, setActiveProjectId }) => {
  const handleActivate = () => setActiveProjectId(project.id);
  const handleDeactivate = () => setActiveProjectId(null);

  return (
    <div className={`${styles.projectCard} ${isActive ? styles.active : ""}`}>
      <div className={styles.projectTitleTab}>
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
          className={styles.projectInfoView}
          onMouseLeave={handleDeactivate}
          onClick={handleDeactivate}
          role="region"
          aria-label={`Details about ${project.title}`}
        >
          <div className={styles.projectDescription}>
            <p>{project.description}</p>
            <div className={styles.techContainer}>
              {project.technologies.map((tech, index) => (
                <span key={tech + index} className={styles.techChip}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.projectLinksContainer}>
            <a
              className={`${styles.linkBtn} linkBtn`}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo för ${project.title}`}
            >
              Live demo
              <LuExternalLink />
            </a>

            <a
              className={`${styles.linkBtn} linkBtn`}
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
