import styles from "./playCard.module.css";

import React from "react";

const PlayCard = ({ children, img }) => {
  return (
    <>
      <div className={styles.play}>
        <div>
          <img src={img} alt="" />
      {/* <button className={styles.info}>adicione ao carrinho</button> */}
        </div>
    
        <div className={styles.escrita}>
          <h2>{children}</h2>
          <h2>{children}</h2>
          <h2>{children}</h2>
      
        </div>
      </div>
    </>
  );
};

export default PlayCard;