import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiPostgresql,
  SiSequelize,
  SiMysql,
  SiRedux
} from "react-icons/si";

const container = {
  init: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stackItem = {
  init: { opacity: 0, y: -50 },
  show: { opacity: 1, x: 0, y: 0 }
};

const skillsData = [
  { icon: <FaReact className={`${styles["small-icon"]} ${styles["react-icon"]}`} />, name: "React" },
  { icon: <FaNodeJs className={`${styles["small-icon"]} ${styles["nodejs-icon"]}`} />, name: "Node.js" },
  { icon: <FaCss3Alt className={`${styles["small-icon"]} ${styles["css-icon"]}`} />, name: "CSS" },
  { icon: <FaHtml5 className={`${styles["small-icon"]} ${styles["html-icon"]}`} />, name: "HTML" },
  { icon: <FaGitAlt className={`${styles["small-icon"]} ${styles["git-icon"]}`} />, name: "Git" },
  { icon: <SiExpress className={`${styles["small-icon"]} ${styles["express-icon"]}`} />, name: "Express" },
  { icon: <SiJavascript className={`${styles["small-icon"]} ${styles["javascript-icon"]}`} />, name: "JavaScript" },
  { icon: <SiPostgresql className={`${styles["small-icon"]} ${styles["postgresql-icon"]}`} />, name: "PostgreSQL" },
  { icon: <SiSequelize className={`${styles["small-icon"]} ${styles["sequelize-icon"]}`} />, name: "Sequelize" },
  { icon: <SiMysql className={`${styles["small-icon"]} ${styles["mysql-icon"]}`} />, name: "MySQL" },
  { icon: <SiRedux className={`${styles["small-icon"]} ${styles["redux-icon"]}`} />, name: "Redux" },
];

function Skills() {
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
              <h2 className={styles["title2"]}>SOFT SkILLS:</h2>
              <div className={styles["images-container"]}>
                {skillsData.map((skill, index) => (
                  <div key={index} className={styles["skill-item"]}>
                    <div className={styles["small-icon"]}>{skill.icon}</div>
                    <div className={styles["text-icon"]}>{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles["card-title2"]}>Skills :</div>
        </Tilt>
      </motion.div>
    </div>
  );
}

export default Skills;


