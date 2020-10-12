import styles from "./Footer.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <nav>
          <ul>
            <li>
              <a href="#proc-spolupracovat">Proč spolupracovat s námi</a>
            </li>
            <li>
              <a href="#s-cim-pracujeme">S čím pracujeme</a>
            </li>
            <li>
              <a href="#co-umime">Co umíme ochránit</a>
            </li>
            <li>
              <a href="#reference">Reference</a>
            </li>
          </ul>
        </nav>
        <p>
          Zdraveprostory.cz s.r.o.
          <br />
          IČO: 04848390
          <br />
          Zlonínská 259, 250 63 Mratín
        </p>
        © 2020 Zdravé Prostory
      </div>
    </footer>
  );
};

export default Footer;
