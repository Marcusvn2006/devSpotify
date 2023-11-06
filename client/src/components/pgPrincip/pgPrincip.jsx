import { Link } from "react-router-dom";
import Cards from "../cards/cards";
import styles from "./pgPrincip.module.css";
import dire from "../../assets/direita.svg"
import esqu from "../../assets/esquer.svg"
const PgPrincip = () => {
  return (
    <div className={styles.bar}>
  
  <header>
          <div className={styles.de}>
            {" "}
            <button><img src={esqu} alt="" /></button>
            <button><img src={dire} alt="" />
            </button>
          </div>
          <div className={styles.dt}>
            {" "}
            <Link>inscreva-se</Link> <button>Log in</button>{" "}
          </div>
        </header>
      
        <div className={styles.bar1}>
          <Cards />
        </div>
  </div>
   
 
  );
};

export default PgPrincip;
