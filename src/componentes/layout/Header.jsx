import styles from './Header.module.css';
import logo from '../../assets/logo.png'; 

function Header() {
  return (
    <header className={styles.header}>
  <div className={styles.marca}>
    <img src={logo} alt="Soraya de la Huerta" className={styles.logo} />
    <h1>Soraya de la Huerta</h1>
  </div>

  <nav className={styles.nav}>
    <a href="#">Inicio</a>
    <a href="#">Productos</a>
    <a href="#">Contacto</a>
    <a href="#">Carrito</a>
  </nav>
</header>
  );
}

export default Header;
