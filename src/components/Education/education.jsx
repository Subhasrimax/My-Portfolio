import styles from "./education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
    return(
    <section className={styles.container}>
       <h2 className={styles.title}>Education</h2>
       <div className={styles.content}>
       <img
          src={getImageUrl("edu/eduImage.png")}
          alt="Me sitting with a laptop"
          className={styles.eduImage}
        />
       <ul className={styles.aboutItems}>
       <li className={styles.aboutItem}>
       <div className={styles.aboutItemText}>
            <h3>SASTRA University</h3>
            <p>
                B.Tech - Information and Communication Technology 
                <br></br>
                2020 - 2024
            </p>
        </div>
        </li>
    </ul>
    </div>
    </section>
    )
}