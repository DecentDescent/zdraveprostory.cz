import styles from "./About.scss";

const About = () => {
  return (
    <section className={styles["about"]} id="s-cim-pracujeme">
      <div className={styles["container"]}>
        <h1>S čím pracujeme?</h1>
        <p className={styles["lead"]}>
          Pro dezinfekci prostor používáme patentovaný produkt GCA Antivir. Ten
          po aplikaci na povrch vytvoří ultratenkou antibakteriální vrstvu,
          která zabraňuje přežití a množení virů, bakterií, řas, mechu i plísní.
          Nanočástice se chemicky naváží na materiál povrchu a tím umožní
          dlouhodobý účinek, navíc chrání před viditelným znečištěním a
          usazováním povlaku. GCA Antivir je navíc šetrný k životnímu prostředí
          a 100% biologicky odbouratelný.
        </p>
      </div>
      <div className={styles["container"]} id="co-umime">
        <h1 className={styles["subheading"]}>Co všechno umíme ochránit?</h1>
        <p className={styles["lead"]}>
          Aplikovat GCA Antivir lze téměř na jakýkoli pevný materiál, kůži nebo
          textil, kde je žádoucí bezinfekčnost a čistota.
        </p>

        <div className={styles["about-boxes"]}>
          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>Stoly</h2>
          </div>

          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>Vypínače</h2>
          </div>

          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>Kliky</h2>
          </div>

          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>Madla</h2>
          </div>

          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>Výtahy</h2>
          </div>

          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>Dveře</h2>
          </div>

          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>
              Kuchyňské
              <br />
              linky
            </h2>
          </div>

          <div className={styles["about-boxes__box"]}>
            <div className={styles["box__icon"]}></div>
            <h2>Telefony</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
