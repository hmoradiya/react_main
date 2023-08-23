import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === product.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItems) =>
      cartItems.id === product.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === product.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === product.id
  );
  
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  removeItemFromCart: () => {},
  deletItemFromCart: () => {},
  totalPriceCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalPriceCount, setTotalPriceCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const priceCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPriceCount(priceCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const deletItemFromCart = (productToDelete) => {
    setCartItems(deleteItem(cartItems, productToDelete));
  }



  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    removeItemFromCart,
    deletItemFromCart,
    totalPriceCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
