"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { Product } from "@/types/index";

function Products() {
  // uses and states
  const [products, setProducts] = useState<Product[]>([]);

  // functions
  const callApi = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const {products} = await response.json();
    setProducts(products)
  };

  // useeffects

  useEffect(() => {
    callApi();
  });
  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
}

export default Products;
