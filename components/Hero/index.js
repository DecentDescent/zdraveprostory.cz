import styles from "./Hero.scss";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["container"]}>
        <h1>
          Zajišťujeme dlouhodobou ochranu proti <span>bakteriím a virům</span>
        </h1>
        <p>
          Používáme dezinfekční ochranu GCA Protectvir, která si poradí s
          většinou bakterií a virů - <strong>včetně koronavirů</strong> a vaše
          okolí <strong>ochrání až na 120 dnů.</strong>
        </p>
      </div>
    </section>
  );
};

export default Hero;
