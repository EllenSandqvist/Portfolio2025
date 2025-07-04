import styles from "./Accordion.module.css";
import { useState } from "react";

const Accordion = ({ summary, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <details
      className={styles.details}
      open={isExpanded}
      onToggle={(e) => setIsExpanded(e.target.open)}
    >
      <summary className={styles.summary}>
        {summary}
        {!isExpanded && (
          <span aria-hidden="true" className={styles.show_more}>
            Show more
          </span>
        )}
      </summary>
      <div className={styles.content}>
        {children}
        {isExpanded && (
          <span
            className={styles.show_more}
            onClick={() => setIsExpanded(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsExpanded(false);
              }
            }}
          >
            Show less
          </span>
        )}
      </div>
    </details>
  );
};

export default Accordion;
