'use client'
import React from "react";
import NavBar from "@/components/navBar";
import Main from "@/components/main";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { CartContextProvider } from "@/context/cartContext";
import {FiltersProvider} from '@/context/filters'



function page() {
  return (
    <div className="  ">
      <CartContextProvider>
      <FiltersProvider>
      <div className="h-screen bg-blue-200 p-10 flex flex-col gap-20">
      <NavBar />
      <div className="  h-full flex items-center">
        <Hero />
      </div>
      </div>
      <Main />
      <Footer/>
      </FiltersProvider>
      </CartContextProvider>
    </div>
  );
}

export default page;
