import styles from "./About.module.css";

// Imported images:
import zickzack from "../../assets/zickzack.svg";
import bubbles from "../../assets/bubbles.svg";
import dots from "../../assets/dotted_row.svg";
import Ellen_svartvitt from "../../assets/Ellen_svartvitt.jpg";
import Accordion from "../Accordion/Accordion";

const About = () => {
  const aboutText = {
    summary:
      "Jag är fullstackutvecklare i JavaScript med ett stort intresse för design och UI/UX. Jag bygger gärna i React, men har även koll på Vue och vanilla JavaScript.",
    showMore:
      "Som person är jag noggrann, har hög arbetsmoral och tror att olika perspektiv leder till bättre lösningar. När jag inte sitter vid datorn och försöker bli klok på kodningsvärldens logik och mysterier, spenderar jag mycket tid med min sambo och våra två söner. Får jag välja fritt, hänger jag i skogen med gott fika och en svampkorg eller diskuterar världsläget med vänner över en middag. Miljö- och samhällsfrågor engagerar mig, och på senare tid har jag även odlat ett trädgårdsintresse. Mat och dryck, hantverk, litteratur, träning och hälsa är annat jag gärna ägnar mig åt.",
  };
  // const summary =
  //   "Jag är fullstackutvecklare i JavaScript med ett stort intresse för design och UI/UX. Jag bygger gärna i React, men har även koll på Vue och vanilla JavaScript.";

  // const showMoreText =
  //   "Som person är jag noggrann, har hög arbetsmoral och tror att olika perspektiv leder till bättre lösningar. När jag inte sitter vid datorn och försöker bli klok på kodningsvärldens logik och mysterier, spenderar jag mycket tid med min sambo och våra två söner. Får jag välja fritt, hänger jag i skogen med gott fika och en svampkorg eller diskuterar världsläget med vänner över en middag. Miljö- och samhällsfrågor engagerar mig, och på senare tid har jag även odlat ett trädgårdsintresse. Mat och dryck, hantverk, litteratur, träning och hälsa är annat jag gärna ägnar mig åt.";

  return (
    <section className={styles.about} id="about">
      <div className={styles.img_background}>
        <img
          className={styles.profile_img_small}
          src={Ellen_svartvitt}
          alt="Profile picture"
        />
        <img className={styles.bubbles} src={bubbles} />
        <img className={styles.dots} src={dots} />
      </div>

      <div className={styles.about_container}>
        <div className={styles.about_heading_div}>
          <h2>
            Vem är jag&nbsp;
            <br />
            <span className={styles.greeting_text}>HALLÅ DÄR</span>
          </h2>
          <img className={styles.zickzack} src={zickzack} alt="" />
        </div>

        {/* Accordion is shown on small screens */}
        <Accordion summary={aboutText.summary} children={aboutText.showMore} />

        {/* Expanded text is shown on bigger screens */}
        <div className={styles.textExpanded}>
          <p>{aboutText.summary}</p>
          <br />
          <p>{aboutText.showMore}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
