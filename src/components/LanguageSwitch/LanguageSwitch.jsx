import styles from "./LanguageSwitch.module.css";
import { useEffect, useRef, useState } from "react";

export const LanguageSwitch = () => {
  const [isActive, setIsActive] = useState(false);
  const [chosenLanguage, setChosenLanguage] = useState("sv");
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const languageOptions = {
    sv: "🟦 Svenska 🔻",
    en: "🟥 English 🔻",
  };

  const handleLanguageChoice = (language) => {
    setChosenLanguage(language);
    setIsActive(false);
  };

  return (
    <div ref={ref} className={styles.customSelect}>
      <div
        className={styles.selected}
        onClick={() => setIsActive(!isActive)}
        role="button"
        aria-expanded={isActive}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsActive(!isActive)}
      >
        {languageOptions[chosenLanguage].replace(
          " 🔻",
          isActive ? " 🔺" : " 🔻"
        )}
      </div>
      <ul className={`${styles.options} ${isActive ? styles.active : ""}`}>
        {Object.entries(languageOptions).map(([key, label]) => (
          <li
            tabIndex={0}
            key={key}
            onClick={() => handleLanguageChoice(key)}
            onKeyDown={(e) => e.key === "Enter" && handleLanguageChoice(key)}
          >
            {label.replace(" 🔻", "")}
          </li>
        ))}
      </ul>
    </div>
  );
};
