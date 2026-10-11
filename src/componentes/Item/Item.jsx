import styles from './Item.module.css';
import { useState } from 'react';

function Item({ imagen, nombre, precio }) {
  const [cantidad, setCantidad] = useState(1);
  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const manejarClick = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
};

  return (
    <div className={styles.tarjeta}>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>

      <div className={styles.selector}>
        <button onClick={decrementar}>−</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <div className={styles.acciones}>
  <button onClick={manejarClick}>Agregar al carrito</button>
  <span onClick={marcarComoFavorito} className={styles.favorito}>
  {esFavorito ? '★' : '☆'}
</span>
</div>
    </div>

    
  );
}

export default Item;