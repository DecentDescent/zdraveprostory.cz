import styles from "./Header.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>logo</div>
      <div className={styles["header__navigation"]}>
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
      </div>
      <div className={styles["header__call"]}>
        <div>
          <h4>Objednávky</h4>
          <span>+420 728 888 888</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
