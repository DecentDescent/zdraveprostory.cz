import styles from "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className={styles["testimonials"]}>
      <div className="container">
        <h1>Jak to vidí naši zákazníci?</h1>
        <p className="lead">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci
          lacus, faucibus ut viverra et, efficitur vel leo. Quisque faucibus
          turpis ac ligula mollis suscipit. Morbi volutpat efficitur eros.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
