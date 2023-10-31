import { Link } from "react-router-dom";
import styles from "./cards.module.css";

const Cards = () => {
  return (
    <div>
      <div className={styles.cont}>
      
        <div className={styles.cont1}>
          <h1>Playlist do Spotify</h1> <Link>mostrar tudo </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
