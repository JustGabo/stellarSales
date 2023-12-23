"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Image from 'next/image'

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
      {product ? (
        <section className="flex flex-col gap-8 ">
          <article className="flex md:flex-row flex-col items-center gap-5">
            <div className="md:w-[40%] w-full flex items-center justify-center border rounded-lg px-4 py-8 shadow-md">
              <Image
              width={200}
              height={200}
                className="h-[300px] object-contain"
                src={product.image}
                alt=""
              />
            </div>
            <article className="md:w-[60%] w-full flex h-[350px]  flex-col gap-5 ">
              <div className="flex flex-col gap-1 py-1 border-b shadow-sm ">
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <p className="font-semibold">${product.price}</p>
              </div>
              <p className="text-xs font-semibold">
                Category:{" "}
                <span className="font-medium text-gray-500">{product.category}</span>
              </p>
              <p className="text-xs font-semibold">
                Description:{" "}
                <span className="text-xs text-gray-500 font-medium capitalize">
                  {product.description}
                </span>
              </p>
              <p className="text-xs font-semibold">
                Rating:{" "}
                <span className="text-xs font-medium text-gray-500 capitalize">
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
      ) : <section className="md:w-full  rounded-md flex gap-5 h-[400px] animate-pulse">
        <article className="md:w-[40%] w-full h-full animate-pulse rounded-md  bg-gray-200 shadow-lg"></article>
        <article className="md:w-[60%] w-full h-full animate-pulse rounded-md bg-gray-200 shadow-lg"></article>
        </section>}
    </div>
  );
}

export default ProductView;
