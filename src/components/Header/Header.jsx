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
    <header className={styles.header}>
      <div>
        <h1
          className={`${styles.header_title} ${styles.typing}`}
          ref={headingRef}
        >
          PORTFOLIO.
        </h1>
        <nav className={styles.header_nav}>
          <ul className={styles.nav_ul}>
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
      <div className={styles.img_div}>
        <img
          className={styles.profile_img}
          src={backsjon}
          alt="Profile image"
        />
      </div>
      <div className={styles.intro_text}>
        <h2 className={styles.header_name}>
          ELLEN
          <br />
          SANDQVIST
        </h2>
        <h3 className={styles.header_work}>FULLSTACKUTVECKLARE JAVASCRIPT</h3>
      </div>
    </header>
  );
};

export default Header;
