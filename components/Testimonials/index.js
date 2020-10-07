import styles from "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className={styles["testimonials"]}>
      <div className={styles["container"]}>
        <h1>Jak to vidí naši zákazníci?</h1>
        <p className={styles["lead"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci
          lacus, faucibus ut viverra et, efficitur vel leo. Quisque faucibus
          turpis ac ligula mollis suscipit. Morbi volutpat efficitur eros. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci lacus,
          faucibus ut viverra et, efficitur vel leo.
        </p>

        <div className={styles["testimonials-boxes"]}>
          <div className={styles["testimonials-boxes__box"]}>
            <div className={styles["avatar"]}></div>
            <h3>Ivan D. | RealityKing | Třebíč</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              orci lacus, faucibus ut viverra et, efficitur vel leo.
            </p>
          </div>

          <div className={styles["testimonials-boxes__box"]}>
            <div className={styles["avatar"]}></div>
            <h3>Pavla P. | PéCafé | Kladno</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              orci lacus, faucibus ut viverra et, efficitur vel leo.
            </p>
          </div>

          <div className={styles["testimonials-boxes__box"]}>
            <div className={styles["avatar"]}></div>
            <h3>Karolína M. | Tábor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              orci lacus, faucibus ut viverra et, efficitur vel leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
