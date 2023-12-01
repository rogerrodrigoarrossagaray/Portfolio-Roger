import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styles from "./ProyectCard.module.css"; // Asegúrate de ajustar el nombre del módulo CSS según corresponda


const container = {
  init: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stackItem = {
  init: { opacity: 0, y: -50 },
  show: { opacity: 1, x: 0, y: 0 },
};

function Card({description,video,miniatura,title,subtitle,proyect}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.App}>
      <motion.div variants={container} initial="init" whileHover="show">
        <Tilt
          className={styles["card-wrapper2"]}
          perspective={800}
          gyroscope={true}
          tiltReverse={true}
          tiltMaxAngleX={10}
        >
            <div>
                <h2>Proyects</h2>
            </div>
            <div className={styles["card-body2"]} data-augmented-ui="tl-clip both">
            <img src={miniatura} alt="" />
    </div>
          <div className={styles["card-body3"]} data-augmented-ui="tl-clip tr-2-clip-x  both">
          <div className={styles["p-body3"]}>
           <h2 className={styles["title2"]}>{subtitle}</h2>
            <p className={styles["title3"]}>{description}</p>
          </div>
          <a href={proyect}>
            <button className={`${styles["btn-card-action"]} ${styles["btn-proyect"]}`} data-augmented-ui="tr-clip tl-clip both">
            View Proyect
          </button>
          </a>
          <a href={video}>
          <button className={`${styles["btn-card-action1"]} ${styles["btn-demo"]}`} data-augmented-ui="tr-clip tl-clip both">
            View Demo
          </button>
          </a>
          </div>
          <div className={styles["card-title2"]}>{title}</div>        
        </Tilt>
      </motion.div>
    
    </div>
  );
}

export default Card;
