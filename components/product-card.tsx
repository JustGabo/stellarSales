"use client";
import { Product } from "@/types/index";
import { Card, CardContent } from "@/components/ui/card";
import Img from "next/image";
import { Expand, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

interface ProductsProps {
  products: Product[];
}

// importing context
import { UsingCartContext } from "@/context/cartContext";
import { usingFilterContext } from "@/context/filters";
import { title } from "process";

function ProductCard({ products }: ProductsProps) {
  const { addProduct, cart } = UsingCartContext();
  const { filter } = usingFilterContext();
  const { toast } = useToast();

  const filteredProducts = products.filter(
    (product: Product) => product.category == filter
  );

  // effects

  return (
    <div className="">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-4 gap-10">
          {filteredProducts.map((product: Product, i: number) => {
            return (
              <Card key={i} className="h-96 border-none">
                <CardContent className="flex-col p-0 flex gap-2">
                  <div className="w-[100%] border overflow-hidden rounded-md px-5 py-5 group  flex flex-col  gap-5 items-center justify-center">
                    {" "}
                    <img
                      className="h-[200px] group-hover:scale-110 transition-all duration-150 object-contain"
                      src={product.image}
                      alt={product.description}
                    />
                    <div className="relative flex items-center">
                      <Button className="bg-transparent  p-2">
                        <Link href={`/product/${product.id}`}>
                          <Expand className="h-9 w-9 rounded-full shadow-xl border  text-black p-2 opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-200" />
                        </Link>
                      </Button>
                      <Button
                        onClick={() => {
                          addProduct(product, product.id);
                          toast({
                            // title: "Added to cart",
                            description: `${product.title} was added to your cart`,
                          });
                        }}
                        className="bg-transparent  p-2"
                      >
                        <Plus className="h-9 w-9 shadow-xl border  opacity-0 rounded-full p-2  text-black group-hover:opacity-100 transition-all duration-200" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-[30%] flex flex-col gap-1">
                    <h3 className="text-sm line-clamp-1 font-medium">
                      {product.title}
                    </h3>
                    <p className="text-xs line-clamp-1">
                      {product.description}
                    </p>
                    <p className="text-xs">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {products.map((product: Product, i: number) => {
            return (
              <Card key={i} className="h-96 border-none">
                <CardContent className="flex-col p-0 flex gap-2">
                  <div className="w-[100%] border overflow-hidden rounded-md px-5 py-5 group  flex flex-col  gap-5 items-center justify-center">
                    {" "}
                    <img
                      className="h-[200px] group-hover:scale-110 transition-all duration-150 object-contain"
                      src={product.image}
                      alt={product.description}
                    />
                    <div className="relative flex items-center">
                      <Button className="bg-transparent  p-2">
                        <Link href={`/product/${product.id}`}>
                          <Expand className="h-9 w-9 rounded-full shadow-xl border  text-black p-2 opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-200" />
                        </Link>
                      </Button>
                      <Button
                        onClick={() => {
                          addProduct(product, product.id);
                          toast({
                            // title: "Product Added",
                            description: `${product.title} was added to your cart`,
                          });
                        }}
                        className="bg-transparent  p-2"
                      >
                        <Plus className="h-9 w-9 shadow-xl border  opacity-0 rounded-full p-2  text-black group-hover:opacity-100 transition-all duration-200" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-[30%] flex flex-col gap-1">
                    <h3 className="text-sm line-clamp-1 font-medium">
                      {product.title}
                    </h3>
                    <p className="text-xs line-clamp-1">
                      {product.description}
                    </p>
                    <p className="text-xs">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
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
