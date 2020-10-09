import styles from "./Form.scss";
import classnames from "classnames";

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
          <input type="text" placeholder="přibližná velikost prostor v m2 " />
          <button>Odeslat</button>
        </div>
      </div>
    </section>
  );
};

export default Form;
