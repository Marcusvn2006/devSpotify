import styles from './hp.module.css'
import logo from "../../../assets/logo.svg"
import casinha from "../../../assets/casaaa.svg"
import pesq from "../../../assets/search.svg"
const Hp = () => {
  return (
    <div>
        <div className={styles.bar}>
    <img src={logo} alt="" />
    <div className={styles.home}><img src={casinha} alt="" /><h2>Home</h2></div>
    <div className={styles.search}><img src={pesq} alt="" /><h2>Search</h2></div>
      </div>
    </div>
  )
}

export default Hp
