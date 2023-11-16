import { Link } from 'react-router-dom'
import Cards from '../cards/cards'
import styles from './pgBusc.module.css'
import dire from "../../assets/direita.svg"
import esqu from "../../assets/esquer.svg"
import pesq from "../../assets/search.svg"
import VcPr from './vcPr/vcPr'

const PgBusc = () => {
  return (
  
   <div className={styles.bar}>
       <header>
          <div className={styles.de}>
            {" "}
            <Link to={"/"}> <button><img src={esqu} alt="" /></button></Link>
            <button><img src={dire} alt="" />
            </button>
            <div className={styles.search}><img src={pesq} alt="" />   <input type="text"placeholder="O que você procura" />
          </div></div>
          <div className={styles.dt}>
            {" "}
            <Link>inscreva-se</Link> 
           <button>Log in</button>{" "}
          </div>
        </header>
      
        <div className={styles.bar1}>
          <VcPr/>
        </div>
  </div>


  )
}

export default PgBusc
