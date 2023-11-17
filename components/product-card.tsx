"use client";

import { Product } from "@/types/index";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Img from "next/image";

interface ProductsProps {
  products: Product[];
}

function ProductCard({ products }: ProductsProps) {
  return (
    <div>
      {products ? (
        <div>
          {products.map((product: Product) => {
            return (
              <Card>
                <CardContent>
                  <img
                    className="w-10 h-10"
                    src={product.thumbnail}
                    alt={product.description}
                  />
                  <CardDescription>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default ProductCard;

// {products.map((product:Product) => {
//     return (
//         <Card>
//             <CardContent>
//                 <Img src={product.thumbnail} alt={product.description}/>
//                 <CardDescription>
//                     <h3>{product.title}</h3>
//                     <p>{product.description}</p>
//                     <p>{product.price}</p>
//                 </CardDescription>
//             </CardContent>
//         </Card>
//     )
// })}
