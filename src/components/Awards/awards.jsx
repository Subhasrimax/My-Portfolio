import styles from "./awards.module.css";

export const Awards = () => {
    return(
    <section className={styles.container}>
       <h2 className={styles.title}>Honours & Awards</h2>
       <div className={styles.content}>
       <ul className={styles.awardsItems}>
       <li className={styles.awardsItem}>
       <div className={styles.awardsItemText}>
            <h3>Temenos Adopt - IT Merit Based Scholarship</h3>
            <p>
                Scholarship worth Rs.60,000/- 
            </p>
        </div>
        </li>
        <li className={styles.awardsItem}>
       <div className={styles.awardsItemText}>
            <h3>HackerRank Badges</h3>
            <p>
                Problem Solving - 5 Stars.
            </p>
        </div>
        </li>
    </ul>
    </div>
    </section>
    )
}