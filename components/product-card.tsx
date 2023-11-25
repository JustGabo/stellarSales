"use client";
import { Product } from "@/types/index";
import { Card, CardContent } from "@/components/ui/card";
import { Expand, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

interface ProductsProps {
  products: Product[];
}

// importing context
import { UsingCartContext } from "@/context/cartContext";
import { UsingFilterContext } from "@/context/filters";

function ProductCard({ products }: ProductsProps) {
  const { addProduct } = UsingCartContext();
  const { filter } = UsingFilterContext();
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
              <Card key={i} className="border-none h-96">
                <CardContent className="flex flex-col gap-2 p-0">
                  <div className="w-[100%] border overflow-hidden rounded-md px-5 py-5 group  flex flex-col  gap-5 items-center justify-center">
                    {" "}
                    <img
                      className="h-[200px] group-hover:scale-110 transition-all duration-150 object-contain"
                      src={product.image}
                      alt={product.description}
                    />
                    <div className="relative flex items-center">
                      <Button className="p-2 bg-transparent">
                        <Link href={`/product/${product.id}`}>
                          <Expand className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-0 cursor-pointer h-9 w-9 group-hover:opacity-100" />
                        </Link>
                      </Button>
                      <Button
                        onClick={() => {
                          addProduct(product, product.id);
                          toast({
                            description: `${product.title} was added to your cart`,
                          });
                        }}
                        className="p-2 bg-transparent"
                      >
                        <Plus className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-0 h-9 w-9 group-hover:opacity-100" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-[30%] flex flex-col gap-1">
                    <h3 className="text-sm font-medium line-clamp-1">
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
              <Card key={i} className="border-none h-96">
                <CardContent className="flex flex-col gap-2 p-0">
                  <div className="w-[100%] border overflow-hidden rounded-md px-5 py-5 group  flex flex-col  gap-5 items-center justify-center">
                    {" "}
                    <img
                      className="h-[200px] group-hover:scale-110 transition-all duration-150 object-contain"
                      src={product.image}
                      alt={product.description}
                    />
                    <div className="relative flex items-center">
                      <Button className="p-2 bg-transparent">
                        <Link href={`/product/${product.id}`}>
                          <Expand className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-0 cursor-pointer h-9 w-9 group-hover:opacity-100" />
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
                        className="p-2 bg-transparent"
                      >
                        <Plus className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-0 h-9 w-9 group-hover:opacity-100" />
                      </Button>
                    </div>
                  </div>

                  <div className="h-[30%] flex flex-col gap-1">
                    <h3 className="text-sm font-medium line-clamp-1">
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
