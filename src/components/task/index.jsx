import styles from "./task.module.css"
import {TbTrash} from "react-icons/tb"
export const Tasks = () => {
  return (
    <div className={styles.task}>
        <button className={styles.checkContainer}>
            <div/>
        </button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, animi.</p>
        <button className={styles.deleteButton}>
            <TbTrash size={20}/>
        </button>
    </div>
  )
}
