import { Link } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import styles from './Inicio.module.css';
function Inicio() {
    
  return (
    <div>
      <div className = {styles.hero}>
        <h2>Soraya de la Huerta</h2>
        <p>Todo para tu huerta urbana: semillas, plantines, macetas y herramientas.</p>
      </div>
      <ItemListContainer mensaje="Productos destacados" limite={3} />
      <div className={styles.acciones}>
  <Link to="/productos" className={styles.verTodo}>
    Ver todo el catálogo
  </Link>
</div>
    </div>
  );
}

export default Inicio;