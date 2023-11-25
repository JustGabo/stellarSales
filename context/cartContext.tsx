import  { useContext, createContext, useState,useEffect } from "react";
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
  total: number
}

const initiaState = {
  cart: [],
  addProduct: () => {},
  removeProduct: () => {},
  clearCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
  total: 0
};

export const UsingCartContext = () => {
  const context = useContext(CartContext);
  return context;
};

const CartContext = createContext<CartContextState>(initiaState);

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  // functions
  const addProduct = (product: Product, id: number) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        
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

  useEffect(()=>{
    const total = cart.reduce((acc, curr)=> {
      return acc + (curr.amount ? curr.amount * curr.price : 0)
    }, 0)
    setTotal(total)
  },[cart])
  
  const value = {
    cart,
    addProduct,
    removeProduct,
    clearCart,
    increaseAmount,
    decreaseAmount,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
