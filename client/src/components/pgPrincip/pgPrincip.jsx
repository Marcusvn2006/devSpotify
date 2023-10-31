import { Link } from "react-router-dom";
import Cards from "../cards/cards";
import styles from "./pgPrincip.module.css";

const PgPrincip = () => {
  return (
    <div className={styles.bar}>
  
  
       <div className={styles.navega}> <img src="" alt="" />
        <img src="" alt="" />
        <Link>insecrever-se</Link>
        <button></button>
        
  </div>
   
        <div className={styles.bar1}>
          <Cards />
        </div>
    </div>
  );
};

export default PgPrincip;
