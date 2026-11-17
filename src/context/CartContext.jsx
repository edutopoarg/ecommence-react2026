import { useState, useContext, createContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (product, quantity) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const getCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  const getCantidadActual = (productId) => {
  const item = cart.find((item) => item.id === productId);
  return item ? item.quantity : 0;
};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        isInCart,
        clearCart,
        getCartQuantity,
        getCartTotal,
        getCantidadActual,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
