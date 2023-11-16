import { Link } from "react-router-dom";
import styles from "./cards.module.css";
import PlayCards from "./playCards/playCard";

const Cards = () => {
  return (
    <div>
      <div className={styles.cont}>
        <h1>Spotfy playlist</h1>
        <div className={styles.cole}>
          <PlayCards img={"https://placehold.co/10000x8000"}></PlayCards>
          <PlayCards img={"https://placehold.co/10000x8000"}></PlayCards>
          <PlayCards img={"https://placehold.co/10000x8000"}></PlayCards>
          <PlayCards img={"https://placehold.co/10000x8000"}></PlayCards>
          <PlayCards img={"https://placehold.co/10000x8000"}></PlayCards>
        </div>{" "}
      </div>
    </div>
  );
};

export default Cards;
