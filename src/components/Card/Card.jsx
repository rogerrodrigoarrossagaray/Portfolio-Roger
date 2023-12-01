import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styles from "./Card.module.css"; // Asegúrate de ajustar el nombre del módulo CSS según corresponda
import ReactIcon from "../../icons/react.svg";
import NodejsIcon from "../../icons/nodejs.svg";
import ExpressIcon from "../../icons/express.svg";
import FirebaseIcon from "../../icons/firebase.svg";
import Javascript from "../../icons/JavaScript.svg";
import Html from "../../icons/Html.svg";
import Css from "../../icons/Css.svg";
import SQL from "../../icons/SQL.svg";
import Redux from "../../icons/Redux.svg";
import Sequalize from "../../icons/Sequelize.svg";
import Postgre from "../../icons/Postgresql.svg";
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

function Card() {
  const stackIcons = [
    { class: styles.react, icon: ReactIcon },
    { class: styles.nodejs, icon: NodejsIcon },
    { class: styles.react, icon: Css },
    { class: styles.firebase, icon: Javascript },
    { class: styles.express, icon: ExpressIcon },
    { class: styles.firebase, icon: Html },
    { class: styles.firebase, icon: FirebaseIcon },
    { class: styles.firebase, icon: SQL },
    { class: styles.firebase, icon: Redux },
    { class: styles.firebase, icon: Sequalize },
    { class: styles.firebase, icon: Postgre },
  ];
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
          <div
            className={styles["card-body2"]}
            data-augmented-ui="tl-clip tr-2-clip-x br-2-clip-x bl-2-clip-x both"
          ></div>
          <div className={styles["card-title2"]}>Roger Arrossagaray</div>
          <div className={styles["card-subtitle2"]}>FullStack Developer</div>
          <a
            className={`${styles["btn-card-action"]} ${styles["btn-demo"]}`}
            data-augmented-ui="tr-clip tl-clip both"
            href="https://drive.google.com/file/d/1VuE458OisbditwJUFCuZN7ArfZAWD2Il/view?usp=sharing"
          >
            <button>Download CV</button>
          </a>
          <button
            className={`${styles["btn-card-action"]} ${styles["btn-source"]}`}
            data-augmented-ui="tr-clip tl-clip both"
          >
            About
          </button>
          <div className={styles["card-icon-stack"]}>
            {stackIcons.map((item, i) => (
              <motion.div
                key={i}
                variants={stackItem}
                className={`${styles["stack-icon-wrapper"]} ${item.class}`}
                data-augmented-ui="all-hex border"
              >
                <img src={item.icon} alt={`Icon ${i}`} />
              </motion.div>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}

export default Card;
