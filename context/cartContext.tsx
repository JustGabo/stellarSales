import React, { useContext, createContext, useState } from "react";
import { Product } from "@/types/index";

interface CartContextProps {
  children: React.ReactNode;
}

interface CartContextState {
  cart: Product[];
  addProduct: (product: Product, id: number) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
}

const initiaState = {
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
};

export const UsingCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

const CartContext = createContext<CartContextState>(initiaState);

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<Product[]>([]);

  // functions
  const addProduct = (product: Product, id: number) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        console.log('loop item', item.id, id)
        
        if (item.id === id) {
          return { ...item, amount: item.amount ? item.amount + 1 : 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeProduct = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseAmount = (id: number) => {
    const item = cart.find((item) => item.id === id);

    if (item) {
      addProduct(item, id);
    }
  };

  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((user) => user.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount  ? item.amount - 1 : 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      removeProduct(id);
    }
    if (cartItem?.amount == 1) {
        removeProduct(id);
      }
  };

  const value = {
    cart,
    addProduct,
    removeProduct,
    clearCart,
    increaseAmount,
    decreaseAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
