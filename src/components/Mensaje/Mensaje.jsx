import React from "react";
import styles from "./Mensaje.module.css"; // Importa los estilos CSS

const Mensaje = () => {
  return (
    <div className={styles.dialog} >
    <div className={styles["message-container"]}>
      <p className={styles.message}>Hola, gracias por visitar mi portfolio0.</p>
    </div>
    </div>
  );
};

export default Mensaje;
