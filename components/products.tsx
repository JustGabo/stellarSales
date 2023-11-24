"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { Product } from "@/types/index";
import Filter from '@/components/filter-select'
import {UsingProductContext} from '@/context/productContext'

// importing context

function Products() {
  // uses and states
  const {products} = UsingProductContext();
  // functions


  // useeffects

  return (
    <div className="p-10 grid gap-20">
      <div className="flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Products</h1>
      <div className="w-[20%]">
      <Filter/>
      </div>
      </div>

      <ProductCard products={products} />
    </div>
  );
}

export default Products;
