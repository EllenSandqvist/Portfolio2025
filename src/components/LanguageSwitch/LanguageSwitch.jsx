import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitch.module.css";
import { useEffect, useRef, useState } from "react";
import sweden from "../../assets/sweden.svg";
import uk from "../../assets/united-kingdom.svg";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);
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
        <img className={styles.flag} src={sweden} alt="Swedish flag" />
        <span>SV</span>
      </>
    ),
    en: (
      <>
        <img className={styles.flag} src={uk} alt="UK flag" />
        <span>EN</span>
      </>
    ),
  };

  const languageLabels = {
    sv: (
      <>
        <img className={styles.flag} src={sweden} alt="Swedish flag" />
        <span>Svenska</span>
      </>
    ),
    en: (
      <>
        <img className={styles.flag} src={uk} alt="UK flag" />
        <span>English</span>
      </>
    ),
  };

  const handleLanguageChoice = (language) => {
    if (language === i18n.language) return;
    i18n.changeLanguage(language);
    setIsActive(false);
  };

  return (
    <div
      ref={ref}
      className={styles.customSelect}
      onClick={() => setIsActive(!isActive)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setIsActive(!isActive)}
      aria-label="Language switcher"
    >
      <div className={styles.selected} aria-expanded={isActive}>
        {languageOptions[i18n.language]}
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
