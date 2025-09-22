import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.heading_container}>
        <h2>
          <span className={styles.textSpan}>{t("footer.subHeading")}</span>
          <br />
          {t("footer.heading")}
        </h2>
      </div>
      <div className={styles.mail}>
        <IoIosMail />
        <p>ell1sandqvist@gmail.com</p>
      </div>
      <div className={styles.socialLinksDiv}>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/ellen-sandqvist/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className={styles.link}
          href="https://github.com/EllenSandqvist"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
