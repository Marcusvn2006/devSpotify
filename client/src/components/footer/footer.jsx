import Button from "../button/button";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.ss}>
      <div>   <h2 className={styles.h21}>Preview of Spotify</h2>
        <br />
      <h2 className={styles.h22}>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </h2></div>
        <div><Button>Sign up free</Button></div>
      </div>
    </footer>
  );
};

export default Footer;
