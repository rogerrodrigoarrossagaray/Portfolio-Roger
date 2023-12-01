import React from "react";
import {BsInstagram,BsWhatsapp,BsLinkedin,BsGithub} from "react-icons/bs";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const numeroTelefono = '1136288126'; // Reemplaza con el número de teléfono deseado
  const mensaje = 'Hola, me contacto por el portfolio'; // Mensaje predefinido, puedes personalizarlo

  const compartirWhatsApp = () => {
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };


  return (
    <nav>
    <div className={styles.sidebar}>
    
      <ul>
        <li className={styles.linkItem}>
          
        <BsInstagram className={styles.iconIg}/>
          
        </li>
        <li className={styles.linkItem}>
        <BsWhatsapp className={styles.iconWsp} onClick={compartirWhatsApp} />
        </li>
        <li className={styles.linkItem}>
        <a href="https://www.linkedin.com/in/roger-arrossagaray-b28306225/">
        <BsLinkedin className={styles.iconLdin}/>
        </a>
        </li>
        <li className={styles.linkItem}>
        <a href="https://github.com/rogerrodrigoarrossagaray">
        <BsGithub className={styles.iconGit}/>
        </a>
          </li>
      </ul>
    </div>
    </nav>
  );
}
