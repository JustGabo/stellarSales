"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { Product } from "@/types/index";
import Filter from '@/components/filter-select'

// importing context

function Products() {
  // uses and states
  const [products, setProducts] = useState<Product[]>([]);

  // functions
  const callApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const res = await response.json();
    setProducts(res)
    console.log(res)
  };  

  // useeffects

  useEffect(() => {
    callApi();
  },[]);
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
