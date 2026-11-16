import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

function Cart() {
  const { cart, clearCart, getCartTotal } = useCart();
  if (cart.length === 0) {
    return (
      <div className={styles.vacio}>
        <h2>El carrito está vacío</h2>
        <p>Agregá productos para continuar la compra.</p>
      </div>
    );
  }

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
        </div>
      ))}

      <div className={styles.resumen}>
        <span className={styles.total}>Total: ${getCartTotal()}</span>
        <button className={styles.vaciar} onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;
