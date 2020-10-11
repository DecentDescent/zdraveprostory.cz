import styles from "./Header.scss";
import classnames from "classnames";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { isNavOn: false };
  }

  openNavigation(status) {
    this.setState(() => ({
      isNavOn: status,
    }));
    status
      ? document.body.classList.add("nav-active")
      : document.body.classList.remove("nav-active");
  }

  render() {
    return (
      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>logo</div>
        <div className={styles["header__navigation"]}>
          <div
            className={classnames({
              [styles["navigation__toggle"]]: true,
              [styles["navigation__toggle--active"]]: this.state.isNavOn,
            })}
            onClick={() => this.openNavigation(!this.state.isNavOn)}
          >
            <svg viewBox="0 0 512 512" className={styles["toggle__open"]}>
              <path d="m438 0h-364c-40.804 0-74 33.196-74 74s33.196 74 74 74h364c40.804 0 74-33.196 74-74s-33.196-74-74-74zm0 108h-364c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34z" />
              <path d="m438 182h-364c-40.804 0-74 33.196-74 74s33.196 74 74 74h364c40.804 0 74-33.196 74-74s-33.196-74-74-74zm0 108h-364c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34z" />
              <path d="m438 364h-364c-40.804 0-74 33.196-74 74s33.196 74 74 74h264c11.046 0 20-8.954 20-20s-8.954-20-20-20h-264c-18.748 0-34-15.252-34-34s15.252-34 34-34h364c18.748 0 34 15.252 34 34s-15.252 34-34 34c-11.046 0-20 8.954-20 20s8.954 20 20 20c40.804 0 74-33.196 74-74s-33.196-74-74-74z" />
            </svg>
            <svg
              viewBox="0 0 329.26933 329"
              className={styles["toggle__close"]}
            >
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          </div>

          <nav
            className={classnames({
              [styles["navigation--active"]]: this.state.isNavOn,
            })}
            onClick={!this.state.isNavOn}
          >
            <ul>
              <li>
                <a
                  href="#proc-spolupracovat"
                  onClick={() => this.openNavigation(false)}
                >
                  Proč spolupracovat s námi
                </a>
              </li>
              <li>
                <a
                  href="#s-cim-pracujeme"
                  onClick={() => this.openNavigation(false)}
                >
                  S čím pracujeme
                </a>
              </li>
              <li>
                <a href="#co-umime" onClick={() => this.openNavigation(false)}>
                  Co umíme ochránit
                </a>
              </li>
              <li>
                <a href="#reference" onClick={() => this.openNavigation(false)}>
                  Reference
                </a>
              </li>
              <li className={styles["mobile-contact"]}>
                <h4>Objednávky</h4>
                <span>+420 728 888 888</span>
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
  }
}
