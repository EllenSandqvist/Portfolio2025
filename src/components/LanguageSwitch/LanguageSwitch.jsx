import styles from "./LanguageSwitch.module.css";
import { useEffect, useRef, useState } from "react";
import sweden from "../../assets/sweden.svg";
import uk from "../../assets/united-kingdom.svg";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

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
    sv: (
      <>
        <img className={styles.flag} src={sweden} />
        <span>SV</span>
      </>
    ),
    en: (
      <>
        <img className={styles.flag} src={uk} />
        <span>EN</span>
      </>
    ),
  };

  const languageLabels = {
    sv: (
      <>
        <img className={styles.flag} src={sweden} />
        <span>Svenska</span>
      </>
    ),
    en: (
      <>
        <img className={styles.flag} src={uk} />
        <span>English</span>
      </>
    ),
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
        {languageOptions[chosenLanguage]}
        <span className={styles.arrow}>
          {isActive ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </span>
      </div>
      <ul className={`${styles.options} ${isActive ? styles.active : ""}`}>
        {Object.entries(languageLabels).map(([key, label]) => (
          <li
            tabIndex={0}
            key={key}
            onClick={() => handleLanguageChoice(key)}
            onKeyDown={(e) => e.key === "Enter" && handleLanguageChoice(key)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};
