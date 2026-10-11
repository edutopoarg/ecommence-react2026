import styles from "./Footer.module.css";
import EquipoContainer from "../EquipoContainer/EquipoContainer";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.datos}>
        <h4>Contacto</h4>
        <p>sorayadelahuerta@gmail.com</p>
        <p>+54 9 11 5555-5555</p>
        <p> Martínez, Buenos Aires</p>
      </div>

      <EquipoContainer />
      <p className={styles.copyright}>
        &copy; 2026 Soraya de la Huerta · Semillas y plantines para tu huerta
        urbana
      </p>
    </footer>
  );
}

export default Footer;
