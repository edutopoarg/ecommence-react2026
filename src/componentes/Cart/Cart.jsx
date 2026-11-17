import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, clearCart, getCartTotal, removeItem } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.vacio}>
        <h2>El carrito está vacío</h2>
        <p>Agregá productos para continuar la compra.</p>
        <Link to="/productos" className={styles.verProductos}>
          Ver productos
        </Link>
      </div>
    );
  }

  const finalizarCompra = () => {
    alert("Gracias por comprar");
    clearCart();
  };

  return (
    <div className={styles.carrito}>
      <h2>Carrito de compras</h2>

      {cart.map((item) => (
        <div key={item.id} className={styles.item}>
          <img src={item.imagen} alt={item.nombre} />

          <div className={styles.info}>
            <h4>{item.nombre}</h4>
            <p>
              {item.quantity} × ${item.precio}
            </p>
          </div>

          <span className={styles.subtotal}>
            ${item.precio * item.quantity}
          </span>

          <button
            className={styles.eliminar}
            onClick={() => removeItem(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className={styles.resumen}>
        <span className={styles.total}>Total: ${getCartTotal()}</span>

        <div className={styles.acciones}>
          <Link to="/productos" className={styles.seguir}>
            ← Seguir comprando
          </Link>

          <button className={styles.vaciar} onClick={clearCart}>
            Vaciar carrito
          </button>

          <Link to="/" onClick={finalizarCompra} className={styles.finalizar}>
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;