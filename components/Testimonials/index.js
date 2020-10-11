import styles from "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className={styles["testimonials"]} id="reference">
      <div className={styles["container"]}>
        <h1>Kde již mají zdravé prostory?</h1>
        <p className={styles["lead"]}>
          GCA Antivirem jsou již ošetřeny prostory v soukromých firmách,
          institucích, sportovních zařízeních i domácnostech.
        </p>
        <div className={styles["testimonials__container"]}>
          <a href="https://www.fkpribram.cz/" target="_blank"><img src="/static/graphics/1.png" /></a>
          <a href="http://www.zzspk.cz/" target="_blank"><img src="/static/graphics/2.png" /></a>
          <a href="https://www.divadlonajezerce.cz/uvod" target="_blank"><img src="/static/graphics/3.png" /></a>
          <a href="https://www.dpmb.cz/cs/novinky/all" target="_blank"><img src="/static/graphics/4.png" /></a>
          <a href="https://www.ccrjm.cz/" target="_blank"><img src="/static/graphics/5.png" /></a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
