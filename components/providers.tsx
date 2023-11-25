'use client'
import { FiltersProvider } from "@/context/filters";
import { CartContextProvider } from "@/context/cartContext";
import { ProductContextProvider } from "@/context/productContext";

interface Props{
    children: React.ReactNode
}

function Providers({children}: Props) {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <FiltersProvider>
            {children}
          </FiltersProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default Providers;
