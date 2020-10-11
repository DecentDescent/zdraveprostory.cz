import styles from "./Hero.scss";
import Header from "../Header";
import Form from "../Form";
const images = [
  "/static/graphics/bg_1.png",
  "/static/graphics/bg_2.png",
  "/static/graphics/bg_3.png",
  "/static/graphics/bg_4.png",
];
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
            Používáme dezinfekční ochranu GCA Protectvir, která si poradí s
            většinou bakterií a virů - <strong>včetně koronavirů</strong> a vaše
            okolí <strong>ochrání až na 120 dnů.</strong>
          </p>
        </div>
        <Form compact="true" />
      </div>
      <div className={styles["hero__background"]}>
        <div className={styles["slides"]}>
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
