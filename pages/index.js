import redirect from "nextjs-redirect";
import styles from "../styles/general.scss";
import Modal from "../components/modal";
import { useState, useEffect } from "react";

function useKeyboardEvent(key, callback) {
  useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}

function Home() {
  const [modalState1, setModal1] = useState(false);
  const [modalState2, setModal2] = useState(false);
  useKeyboardEvent("Escape", () => {
    setModal1(false);
    setModal2(false);
  });

  return (
    <>
      <Modal
        active={modalState1 || modalState2}
        content1={modalState1}
        content2={modalState2}
        close={modalState1 ? () => setModal1(false) : () => setModal2(false)}
      />
      <section id="domu" className={styles["section--hero"]}>
        <div className={styles["container"]}>
          <p>
            Vytváříme dokonale čisté a zdravé prostory. Víme, co vás trápí.
            Rozumíme tomu, co děláme. Máme řešení.
          </p>
        </div>
      </section>
      <section id="vize" className={styles["section--color"]}>
        <div className={styles["container"]}>
          <h1>Naše vize</h1>
          <p>
            Stále jsme fascinováni tím, co umíme! Díky využití nejmodernějších
            nanotechnologií přinášíme komplexní řešení v oblasti hypoalergenního
            a antibakteriálního prostředí. Aplikujeme ty nejlepší technické
            vynálezy do jednotlivých odvětví, kde je kladen důraz na naprosto
            hygienické, dokonale čisté a zdravé prostředí. Vše přehledně na
            jednom místě.
          </p>
          <p>
            <b>Poradenství – Aplikace – Prodej</b>
          </p>
        </div>
      </section>

      <section id="produkty">
        <div className={styles["container"]}>
          <h1>Produkty</h1>

          <div className={styles["products"]}>
            <div className={styles["product"]}>
              <h2>Funkční nátěry</h2>
              <h3>Pro dokonale zdravé prostředí</h3>
              <p>
                Jedná se o interierové a exterierové nátěry, které fungují jako
                vysoce účinné čističky vzduchu. Je prokázáno, že 15m2 nátěru
                vyčistí tolik vzduchu, jako znečistí jedno dieslové auto za
                celou svojí životnost! Nátěry přináší novodobé řešení úbytku
                čerstvého vzduchu ve velkých městech a vytváří zcela
                hypoalergenní a antibakteriální prostředí v uzavřených
                prostorech.
              </p>
              <button onClick={() => setModal1(true)}>Více informací</button>
            </div>
            <div className={styles["product"]}>
              <h2>Glass &amp; Ceramic Antibacterial</h2>
              <h3>Dlouhodobá dezinfekce</h3>
              <p>
                Je perzistentní antibakteriální ochrana pevných materiálů bez
                obsahu biocidů. Díky svému unikátnímu složení a důkladnému
                otestování Státním Zdravotnickým Ústavem získal tento produkt
                jako jedinný vyjímku a nespadá do zákona o biocidech. Svým
                dezinfekčním účinkem ale daleko převyšuje všechny konkurenční
                výrobky, které biocidy obsahují (garantovaná antibakteriální
                účinnost je minimálně 99,7%!
              </p>
              <button onClick={() => setModal2(true)}>Více informací</button>
            </div>
          </div>
        </div>
      </section>

      <section id="co-umime" className={styles["section--color"]}>
        <div className={styles["container"]}>
          <h1>Co umíme</h1>
          <p>
            Dokážeme vyčistit vzduch od všech jedovatých splodin, toxinů a
            alergenů nebo třeba zlikvidujeme veškeré bakterie bez užití biocidů
            a zajistíme dlouhodobě dezinfekční prostředí. Úspěšně dokážeme řešit
            problémy, které byly dosud považovány za nepřekonatelné. Naprosto
            ekologické a biologicky odbouratelné technologie dávají šanci
            příštím generacím. Velice jednoduše, účinně a okem neviditelně.
            Takový je svět nanotechnologií.
          </p>

          <p>
            Rozumíme vašim potřebám a máme řešení. Pocházíme z jednotlivých
            oborů, kde jsme dlouhodobě působili. Dokonale rozumíme problematice
            a jednotlivým požadavkům. Jsou mezi námi odborníci z oblasti
            projektování zdravotnických a farmaceutických zařízení, vytváření
            hygienických plánů a dodržování zákonných norem. Několik let se
            intenzivně pohybujeme v údržbě a čištění luxusních hotelů, penzionů
            a restaurací. Disponujeme nejlepším vybavením pro dosažení
            nejlepších výsledků díky spolupráci s největšími řemeslnými
            odborníky v zemi. Osobně se podílíme na vývoji nových technologií a
            spolutvoříme směr, který je žádaný v oborech našeho působení. Jsme
            lidé z branže.
          </p>
        </div>
      </section>

      <section id="kontakt">
        <div className={styles["container"]}>
          <h1>Kontakt</h1>
          <h2>Jakub Sokol</h2>
          <p>
            <a href="mailto:jakub.sokol@zdraveprostory.cz">
              jakub.sokol@zdraveprostory.cz
            </a>
          </p>
          <p>
            <strong>(+420) 792 310 486</strong>
          </p>
          <p>
            <a
              href="https://www.instagram.com/zdraveprostory.cz/"
              target="_blank"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://www.facebook.com/Zdrav%C3%A9Prostorycz-105214201062315/"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
