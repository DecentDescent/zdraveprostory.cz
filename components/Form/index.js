import classnames from "classnames";
import styles from "./Form.scss";

const Form = (props) => {
  return (
    <section
      className={classnames({
        [styles["form"]]: true,
        [styles["form--compact"]]: props.compact,
      })}
    >
      <div className={styles["container"]}>
        {props.compact ? (
          <p className={styles["form__info"]}>
            <strong>Ozveme se</strong>. Nechte nám na sebe kontakt a vytvoříme
            vám nabídku na míru.
          </p>
        ) : (
          <>
            <h1>Ozveme se</h1>
            <p className={styles["lead"]}>
              Nechte nám na sebe kontakt a vytvoříme vám nabídku na míru.
            </p>
          </>
        )}

        <div className={styles["form__container"]}>
          <input type="text" placeholder="váše telefonní číslo / email" />
          <input type="text" placeholder="přibližná velikost prostor v m2" />
          <button>Odeslat</button>
        </div>
        {/* <p className={styles["form__error"]}>Vyplňte, prosím, obě pole</p>
        <p className={styles["form__ok"]}>
          Nezávazná poptávka odeslána, děkujeme!
        </p> */}
      </div>
    </section>
  );
};

export default Form;
