import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/index";
import { Expand, Plus } from "lucide-react";

// importin context
import { UsingCartContext } from "@/context/cartContext";

interface Props {
  products: Product[];
}

function RelatedProductsCard({ products }: Props) {
  const { addProduct } = UsingCartContext();
  const { toast } = useToast();

  return (
    <div className="grid grid-cols-6 gap-5">
      {products ? (
        products.map((product) => {
          return (
            <Card key={product.id} className="border-none h-96">
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
                          // title: "Added to cart",
                          description: `${product.title} was added to your cart`,
                        });
                      }}
                      className="p-2 bg-transparent"
                    >
                      <Plus className="p-2 text-black transition-all duration-200 border rounded-full shadow-xl opacity-0 h-9 w-9 group-hover:opacity-100" />
                    </Button>
                  </div>
                </div>

                <div className="h-[30%] flex flex-col gap-2">
                  <h3 className="text-sm font-semibold line-clamp-1">
                    {product.title}
                  </h3>
                  <span className="text-xs font-semibold text-gray-500">
                    {product.category}
                  </span>
                  <span className="text-xs font-semibold">
                    ${product.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <section className="bg-red-50 h-96"> hola</section>
      )}
    </div>
  );
}

export default RelatedProductsCard;
