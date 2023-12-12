import styles from "./tasks.module.css"
import {Tasks} from "../task/index"
export function Task(){
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                <p>Create task</p>
                <p>10</p>
                </div>
                <div>
                 <p className={styles.textPurple}>Completed</p>
                 <span>1 of 10</span>
                </div>
            </header>
            <div className={styles.list}>
                <Tasks/>
            </div>
        </section>
    )
}