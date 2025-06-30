import { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import backsjon from "../../assets/backsjon.png";

const Header = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const portfolioHeading = headingRef.current;
    const text = portfolioHeading.innerHTML;
    portfolioHeading.innerHTML = "";

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
              <a href="#home">HEM</a>
            </li>
            <li>
              <a href="#about">OM MIG</a>
            </li>
            <li>
              <a href="#work">PROJEKT</a>
            </li>
            <li>
              <a href="#contact">KONTAKT</a>
            </li>
          </ul>
        </nav>
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
