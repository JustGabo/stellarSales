"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  id: number;
}

// importing context
import { UsingProductContext } from "@/context/productContext";
import { UsingCartContext } from "@/context/cartContext";

function ProductView({ id }: Props) {
  // usages
  const { toast } = useToast();
  const { products } = UsingProductContext();
  const { addProduct } = UsingCartContext();

  const product = products.find((product) => product.id == id);

  return (
    <div className="">
      {product && (
        <section className="flex flex-col gap-8 ">
          <article className="flex items-center gap-5">
            <div className="w-[40%] flex items-center justify-center border rounded-lg px-4 py-8 shadow-md">
              <img
                className="h-[300px] object-contain"
                src={product.image}
                alt=""
              />
            </div>
            <article className="w-[60%] flex h-[350px]  flex-col gap-5 ">
              <div className="flex flex-col gap-1 py-1 border-b shadow-sm ">
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <p className="font-semibold">${product.price}</p>
              </div>
              <p className="text-xs font-semibold">
                Category:{" "}
                <span className="font-medium">{product.category}</span>
              </p>
              <p className="text-xs font-semibold">
                Description:{" "}
                <span className="text-xs font-medium capitalize">
                  {product.description}
                </span>
              </p>
              <p className="text-xs font-semibold">
                Rating:{" "}
                <span className="text-xs font-medium capitalize">
                  {product.rating.rate}
                </span>
              </p>
              <Button
                onClick={() => {
                  addProduct(product, product.id);
                  toast({
                    // title: "Added to cart",
                    description: `${product.title} was added to your cart`,
                  });
                }}
                className="text-xs w-min bg-[#030303]"
              >
                Add to cart
              </Button>
            </article>
          </article>
        </section>
      )}
    </div>
  );
}

export default ProductView;
