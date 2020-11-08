import styles from "./Hero.scss";
import Header from "../Header";
import Form from "../Form";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["container"]}>
        <Header />
        <div className={styles["hero__text"]}>
          <h1>
            Zajišťujeme dlouhodobou ochranu proti <span>bakteriím a virům</span>
          </h1>
          <p>
            Používáme dezinfekční ochranu GCA Antivir, která si poradí s
            bakteriemi a viry – <strong>i koronaviry</strong> a vaše okolí
            ochráníme <strong>na 120 dnů.</strong>
          </p>
        </div>
        {/* <Form compact="true" /> */}
      </div>
      <div className={styles["hero__background"]}>
        <div className={styles["slides"]}>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
          <div className={styles["background__slide"]}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
