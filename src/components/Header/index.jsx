import styles from "./header.module.css"
import logo from "../../assets/logo.svg"
import {AiOutlinePlusCircle} from "react-icons/ai"
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
      <form className={styles.newTaskForm}>
      <input placeholder="add a new task" type="text" />
      <button>Create
        <AiOutlinePlusCircle size={20}/>
      </button>
      </form>
    </header>
  );
}
