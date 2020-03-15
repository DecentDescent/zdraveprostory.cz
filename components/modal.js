import styles from "../styles/general.scss";
import classnames from "classnames";

function Modal(props) {
  return (
    <div
      className={classnames({
        [styles["modal"]]: true,
        [styles["modal--active"]]: props.active
      })}
    >
      <div className={styles["modal-close"]} onClick={props.close}>
        Zpět
      </div>
      <div className={styles["modal-box"]}>
        {props.content1 ? (
          <>
            <h1>Funkční nátěry</h1>
            <h2>Pro dokonale zdravé prostředí</h2>
            <p>
              Jedná se o interierové a exterierové nátěry, které fungují jako
              vysoce účinné čističky vzduchu. Je prokázáno, že 15m2 nátěru
              vyčistí tolik vzduchu, jako znečistí jedno dieslové auto za celou
              svojí životnost! Nátěry přináší novodobé řešení úbytku čerstvého
              vzduchu ve velkých městech a vytváří zcela hypoalergenní a
              antibakteriální prostředí v uzavřených prostorech.
            </p>
            <p>
              Dokonale ekologické řešení bez chemie – jedná se o fyzikální
              efekt!
            </p>
            <p>Sen budoucích generací.</p>
            <p>
              Co všechno dokáží nátěry vyčistit? Jde o nanotechnologii – svět v
              jednotkách miliardtiny metru.. Proto nátěry zničí nečistoty, které
              nejsou vidět ani mikroskopem a běžné čističky vzduchu si s nimi
              neumí poradit.
            </p>
            <p>
              Likvidují zápachy, plísně, alergeny (včetně exkrementů roztočů ve
              vzduchu), emise, nebezpečné látky a vytváří naprosto hygienické
              prostředí. Jsou samočistící – udržují povrchy stále čisté po dobu
              minimálně 5 let.{" "}
            </p>
            <p>
              Ideální řešení pro dodržení vysokých standardů čistoty ve
              zdravotnických a farmaceutických provozech, zcela bezkonkurenční
              antialergenní pobyt v ubytovacích zařízeních, antibakteriální
              prostředí v potravinářských závodech, samočistící fasády, zdravé
              domácnosti.{" "}
            </p>
            <p>
              <b>Jak to funguje?</b>
            </p>
            <p>
              Technologie využívá specifických vlastností mikroskopických
              krystalů TiO2 o rozměrech menších než 100 nanometrů a fyzikálních
              jevů na atomární a subatomární úrovni.{" "}
            </p>
            <p>
              Princip je založen na přírodním (nechemickém) procesu –
              fotokatalýze. Energie světla, která dopadá mikrokrystaly
              polovodiče TiO2 vytváří na jejich povrchu volné elektrony a
              elektronové díry, jejichž působení rozkládá molekuly organických
              látek až na oxid uhličitý a vodu. Zjednodušeně lze tento jev
              přirovnat k rozžhavené plotně, na kterou dopadne kousek
              organického materiálu, který okamžitě shoří a rozloží se na
              základní komponenty. Stejně obrovskou energii využívá i
              fotokatalýza, jen bez ohně a vysoké teploty.
            </p>

            <p>
              Uprava pro zdravotnictví, hotely, domacnosti, fasady,
              potravinarstvi
            </p>
          </>
        ) : null}

        {props.content2 ? (
          <>
            <h1>Glass & Ceramic Antibacterial</h1>
            <h2>Dlouhodobá dezinfekce</h2>
            <p>
              Je perzistentní antibakteriální ochrana pevných materiálů bez
              obsahu biocidů. Díky svému unikátnímu složení a důkladnému
              otestování Státním Zdravotnickým Ústavem získal tento produkt jako
              jedinný vyjímku a nespadá do zákona o biocidech. Svým dezinfekčním
              účinkem ale daleko převyšuje všechny konkurenční výrobky, které
              biocidy obsahují (garantovaná antibakteriální účinnost je
              minimálně 99,7%!
            </p>
            <p>
              U kvasinek potom 87,8%!). Přípravek stačí aplikovat pouze jednou
              za 21 dní a to i v prostorech vyžadujících naprosto sterilní
              prostředí. Tím obrovsky šetří náklady, je mnohem účinější a
              nezatěžuje životní prostředí. Další výhodou je velice silná
              hydrofobní ochrana chránící povrchy proti špíně a znečištění a tím
              značně usnadňuje následné čištění bez použití nebezpečných
              chemikálií. Šetří tak další finance vynaložené na úklidové
              přípravky a tolik drahocený čas, který se dá využít efektivněji.
            </p>
            <p>
              Dlouhodobě sterilní prostředí zajišťujeme hlavně na operačních
              sálech, porodnicích, ve výrobnách léků, hotelových koupelnách a
              lázních, výrobnách potravin, kuchyních nebo na toaletách.
              Doporučujeme využívat na sklo, glazovanou keramiku, smalt, mramor,
              porcelán, žulu, barevné kovy, nerez, hliník a další nenasákavé
              povrchy. Antibakteriální nano ochrana znemožňuje život bakteriím,
              mechu, plísním a řasám. Je odolná proti vodní rzi se samočistícím
              efektem vytváří velmi hygienický povrch!
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
