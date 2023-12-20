"use client";
import { FiltersProvider } from "@/context/filters";
import { CartContextProvider } from "@/context/cartContext";
import { ProductContextProvider } from "@/context/productContext";
import { StepsContextProvider } from "@/context/stepsContext";

interface Props {
  children: React.ReactNode;
}

function Providers({ children }: Props) {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <FiltersProvider>
            <StepsContextProvider> 
              {children}
            </StepsContextProvider>
          </FiltersProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default Providers;
