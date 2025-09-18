import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import backsjon from "../../assets/backsjon.png";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll/Observer
  useEffect(() => {
    const sections = document.querySelectorAll("header, section, footer");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let current = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });

      // Check if one is at the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 5
      ) {
        current = "contact";
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    const updateScrollListener = () => {
      window.removeEventListener("scroll", handleScroll);
      if (window.innerWidth >= 768) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      }
    };

    updateScrollListener();
    window.addEventListener("resize", updateScrollListener);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollListener);
    };
  }, [activeSection]);

  // Header typing effect:
  const headingRef = useRef(null);

  useEffect(() => {
    const portfolioHeading = headingRef.current;
    const text = portfolioHeading.textContent;
    portfolioHeading.textContent = "";

    let i = 0;

    const timer = setInterval(() => {
      if (i < text.length) {
        portfolioHeading.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          portfolioHeading.classList.remove("typing");
          portfolioHeading.style.border = "none";
        }, 3000);
      }
    }, 280);
  }, []);

  return (
    <header className={styles.header} id="home">
      <div className={styles.stickyNav}>
        <div className={styles.h1Container}>
          <h1
            className={`${styles.headerTitle} ${styles.typing}`}
            ref={headingRef}
          >
            PORTFOLIO.
          </h1>
        </div>

        <nav className={styles.headerNav}>
          <ul className={styles.navUl}>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? styles.active : ""}
              >
                HEM
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? styles.active : ""}
              >
                OM MIG
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={activeSection === "work" ? styles.active : ""}
              >
                PROJEKT
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? styles.active : ""}
              >
                KONTAKT
              </a>
            </li>
          </ul>
        </nav>
        <LanguageSwitch />
      </div>
      <div className={styles.leftColumn}></div>
      <div className={styles.imgDiv}>
        <img className={styles.profileImg} src={backsjon} alt="Profile image" />
      </div>
      <div className={styles.introText}>
        <h2 className={styles.headerName}>
          ELLEN
          <br />
          SANDQVIST
        </h2>
        <h3 className={styles.headerWork}>FULLSTACKUTVECKLARE JAVASCRIPT</h3>
      </div>
    </header>
  );
};

export default Header;
