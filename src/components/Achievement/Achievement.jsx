import styles from "./Achievement.module.css";
import { getImageUrl } from "../../utils";

const Achievement = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Achievement</h2>
      <ul className={styles.history}>
        <li className={styles.historyItem}>
          <img
            className={styles.historyImg}
            src={getImageUrl("history/geektrust.png")}
            alt={"Geek-trust frontend challenge"}
          />
          <div className={styles.historyItemDetails}>
            <p>Oct, 2023</p>
            <ul>
              <li>
                Sucessfully submitted two frontend based challenge on
                Geek-trust.
              </li>
              <li>
                Got 94 points out of 100 on both{" "}
                <a
                  href="https://teerax-store.netlify.app/"
                  className={styles.link}
                >
                  {" "}
                  TeeRex Store{" "}
                </a>{" "}
                and{" "}
                <a
                  href="https://admin-ui-vishal.netlify.app/"
                  className={styles.link}
                >
                  {" "}
                  Admin UI{" "}
                </a>{" "}
                challenge.
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Achievement;
