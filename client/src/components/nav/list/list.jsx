import styles from "./list.module.css";
import bibli from "../../../assets/bibli.svg";
import add from "../../../assets/add.svg";
import word from "../../../assets/word.svg";
import Button from "../../button/button";
const List = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.bibli}>
        <img src={bibli} alt="" />
        <h2>Home</h2>
        <img src={add} alt="" className={styles.add} />
      </div>
      <div className={styles.rola}>
        {" "}
        <div className={styles.creaplay}>
          <h2>Create your first playlist</h2>
          <p>It's easy, we'll help you</p>
          <div className={styles.button}>
            <Button>clica fdp </Button>
          </div>
        </div>
        <div className={styles.creaplay}>
          <h2>Create your first playlist</h2>
          <p>It's easy, we'll help you</p>
          <div className={styles.button}>
            <Button>clica fdp </Button>
          </div>
        </div>
      </div>

      <p className={styles.col}>cookies</p>
      <div className={styles.but}>
        <button>
          <img src={word} alt="" />
          portugues
        </button>
      </div>
    </div>
  );
};

export default List;
