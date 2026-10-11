import styles from './Header.module.css';
import logo from '../../assets/logo.png'; 
import { Link } from "react-router-dom";



function Header() {
  return (
    <header className={styles.header}>
  <div className={styles.marca}>
    <img src={logo} alt="Soraya de la Huerta" className={styles.logo} />
    <h1>Soraya de la Huerta</h1>
  </div>

  <nav className={styles.nav}>
    <Link to="/">Inicio</Link>
    <Link to="/productos">Productos</Link>
    <Link to="/contacto">Contacto</Link>
    <Link to="/carrito">Carrito</Link>
    <Link to="/admin">Admin</Link>
  </nav>
</header>
  );
}

export default Header;
