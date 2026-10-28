import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ProductoDetalle.module.css";

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const encontrado = datos.find((p) => p.id === Number(id));
        setProducto(encontrado);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.detalle}>
      <h2>Detalle del Producto</h2>
      <p>ID del producto: {id}</p>
      <p>Nombre: {producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <img src={producto.imagen} alt={producto.nombre} />
    </div>
  );
}

export default ProductoDetalle;
