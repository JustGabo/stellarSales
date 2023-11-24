'use client'
import React from "react";
import NavBar from "@/components/navBar";
import Main from "@/components/main";
import Hero from "@/components/hero";
import Footer from "@/components/footer";


// importing contexts
import {ProductContextProvider} from '@/context/productContext'
import { CartContextProvider } from "@/context/cartContext";
import {FiltersProvider} from '@/context/filters'



function page() {
  return (
    <div className="  ">
      <ProductContextProvider>
      <CartContextProvider>
      <FiltersProvider>
      <div className="h-screen bg-blue-200 px-10 flex flex-col gap-20">
      <NavBar />
      <div className="  h-full flex items-center">
        <Hero />
      </div>
      </div>
      <Main />
      <Footer/>
      </FiltersProvider>
      </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default page;
