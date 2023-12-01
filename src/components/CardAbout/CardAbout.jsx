import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styles from "./CardAbout.module.css"; // Asegúrate de ajustar el nombre del módulo CSS según corresponda


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

function CardAbout() {
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
            
          <div className={styles["card-body3"]} data-augmented-ui="tl-clip tr-2-clip-x  both">
          <div className={styles["p-body3"]}>
           <h2 className={styles["title2"]}>Roger Rodrigo Arrossagaray</h2>
            <p className={styles["title3"]}>
            Soy un Full Stack Developer con una formación en desarrollo web y una destacada 
experiencia en Henry, donde obtuve una puntuación máxima en todos los módulos. Mis 
competencias abarcan desde la resolución de conflictos de código hasta la adaptación 
de diseños para aplicaciones. Me especializo en el desarrollo Front-end, aunque 
también tengo experiencia en el Back-end. Mis habilidades técnicas incluyen tecnologías 
como Express, PostgreSQL, React, y más.
Durante mi tiempo en Henry, contribuí a la creación de tres proyectos multifacéticos 
que demostraron mi capacidad para aplicar mis conocimientos en situaciones reales. 
Poseo habilidades blandas como comunicación efectiva, resolución de problemas y 
liderazgo en proyectos. Además, soy muy puntual con las fechas de entrega. Mi nivel de 
inglés es básico.
            </p>
          </div>
            
          </div>
          <div className={styles["card-title2"]}>Sobre Mi:</div>        
        </Tilt>
      </motion.div>
    
    </div>
  );
}

export default CardAbout;