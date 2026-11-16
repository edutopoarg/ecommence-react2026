import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductoDetalle.module.css";
import { Link } from "react-router-dom";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();
  const [agregado, setAgregado] = useState(false);
  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const encontrado = datos.find((p) => p.id === Number(id));
        setProducto(encontrado);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const manejarAgregar = () => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.detalle}>
      <img src={producto.imagen} alt={producto.nombre} />

      <h2>{producto.nombre}</h2>
      <p className={styles.precio}>${producto.precio}</p>

      <div className={styles.selector}>
        <button onClick={decrementar}>−</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>

      <button className={styles.boton} onClick={manejarAgregar}>
        Agregar al carrito
      </button>
      {agregado && (
        <Link to="/carrito" className={styles.verCarrito}>
          Ver carrito
        </Link>
      )}
    </div>
  );
}

export default ProductoDetalle;
