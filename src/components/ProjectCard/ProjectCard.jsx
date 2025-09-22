import { useTranslation } from "react-i18next";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, isActive, setActiveProjectId }) => {
  const { t } = useTranslation();
  const handleActivate = () => setActiveProjectId(project.id);
  const handleDeactivate = () => setActiveProjectId(null);

  return (
    <div className={`${styles.projectCard} ${isActive ? styles.active : ""}`}>
      <div className={styles.projectTitleTab}>
        <h4>{t(`${project.title}`)}</h4>
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
            <p className={styles.description}>{t(`${project.description}`)}</p>
            <p className={styles.midDescription}>
              {t(`${project.midDescription}`)}
            </p>
            <p className={styles.detailedDescription}>
              {t(`${project.detailedDescription}`)}
            </p>
            <div className={styles.techContainer}>
              {t(`${project.technologies}`, { returnObjects: true }).map(
                (tech, index) => (
                  <span key={tech + index} className={styles.techChip}>
                    {tech}
                  </span>
                )
              )}
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
