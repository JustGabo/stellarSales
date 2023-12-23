"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Skeleton from "@/components/products-skeleton";
import { Expand, Plus } from "lucide-react";
import { Product } from "@/types/index";
import Link from "next/link";
import { ToastAction } from "@/components/ui/toast";
// import {} from 'lucide-react'
import { ArrowRightFromLine } from 'lucide-react';
import Image from 'next/image'


interface ProductsProps {
  productsProps: Product[];
}

// importing context
import { UsingCartContext } from "@/context/cartContext";
import { UsingFilterContext } from "@/context/filters";
import { UsingProductContext } from "@/context/productContext";

function ProductCard({ productsProps }: ProductsProps) {
  const { addProduct } = UsingCartContext();
  const { filter } = UsingFilterContext();
  const { toast } = useToast();

  const { products } = UsingProductContext();

  const filteredProducts = products.filter(
    (product: Product) => product.category == filter
  );

  return (
    <div className="">
      {products.length > 0 ? (
        <>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {filteredProducts.map((product: Product, i: number) => {
                return (
                  <Card key={i} className="border-none shadow-none h-96">
                    <CardContent className="flex flex-col shadow-none border-none gap-2 p-0">
                      <div className="w-[100%] border overflow-hidden rounded-md px-5 py-5 group  flex flex-col  gap-5 items-center justify-center">
                        {" "}
                        <Link href={`/product/${product.id}`}>
                          <Image
                          width={10}
                          height={10}
                            className="h-[200px] group-hover:scale-110 transition-all duration-150 object-contain"
                            src={product.image}
                            alt={product.description}
                          />
                        </Link>
                        <div className="relative  flex items-center">
                          <Button className="p-2 bg-transparent">
                            <Link href={`/product/${product.id}`}>
                              <Expand className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-100 md:opacity-0 cursor-pointer h-9 w-9 group-hover:opacity-100" />
                            </Link>
                          </Button>
                          <Button
                            onClick={() => {
                              addProduct(product, product.id);
                              toast({
                                description: `${product.title} was added to your cart`,
                                action: (
                                  <ToastAction altText="Go to checkout">
                                    <Link href={"/checkout"}></Link>
                                  </ToastAction>
                                ),
                              });
                            }}
                            className="p-2 bg-transparent"
                          >
                            <Plus className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-100 md:opacity-0 h-9 w-9 group-hover:opacity-100" />
                          </Button>
                        </div>
                      </div>

                      <div className="h-[30%] flex flex-col gap-1">
                        <Link href={`/product/${product.id}`}>
                          <h3 className="text-sm font-medium line-clamp-1">
                            {product.title}
                          </h3>
                        </Link>

                        <p className="text-xs line-clamp-1">
                          {product.description}
                        </p>
                        <p className="text-xs font-semibold">
                          ${product.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {products.map((product: Product, i: number) => {
                return (
                  <Card key={i} className="border-none shadow-none h-96">
                    <CardContent className="flex flex-col shadow-none gap-2 p-0">
                      <div className="w-[100%] border overflow-hidden rounded-md px-5 py-5 group  flex flex-col  gap-5 items-center justify-center">
                        {" "}
                        <Link href={`/product/${product.id}`}>
                          <Image
                          width={140}
                          height={140}
                            className="h-[200px] group-hover:scale-110 transition-all duration-150 object-contain"
                            src={product.image}
                            alt={product.description}
                          />
                        </Link>
                        <div className="relative flex items-center">
                          <Button className="p-2 bg-transparent">
                            <Link href={`/product/${product.id}`}>
                              <Expand className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-100 md:opacity-0 cursor-pointer h-9 w-9 group-hover:opacity-100" />
                            </Link>
                          </Button>
                          <Button
                            onClick={() => {
                              addProduct(product, product.id);
                              toast({
                                // title: "Product Added",
                                description: `${product.title} was added to your cart`,
                                action: (
                                  <ToastAction altText="Go to checkout">
                                    <Link href={"/checkout"}><ArrowRightFromLine className="w-3 h-3"/></Link>
                                  </ToastAction>
                                ),
                              });
                            }}
                            className="p-2 bg-transparent"
                          >
                            <Plus className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-100 md:opacity-0 h-9 w-9 group-hover:opacity-100" />
                          </Button>
                        </div>
                      </div>

                      <div className="h-[30%] flex flex-col gap-1">
                        <Link href={`/product/${product.id}`}>
                          <h3 className="text-sm font-medium line-clamp-1">
                            {product.title}
                          </h3>
                        </Link>
                        <p className="text-xs line-clamp-1">
                          {product.description}
                        </p>
                        <p className="text-xs font-semibold">
                          ${product.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <>
          <Skeleton />
        </>
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
