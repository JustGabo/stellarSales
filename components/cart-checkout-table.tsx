"use client";
import Link from "next/link";
import {ChevronLeft} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

// importing context
import { UsingCartContext } from "@/context/cartContext";

function CartCheckoutTable() {
  // context
  const { cart, increaseAmount, decreaseAmount, total } = UsingCartContext();

  return (
    <div className=" h-full flex flex-col gap-3">
      <div className="h-[90%] overflow-y-auto border-y border-gray-100   p-5">
      {cart.length > 0 ? (
        <Table>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Subtotal</TableHead>
          </TableRow>
          <TableBody>
            {cart.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-5">
                      <img
                        className="h-[125px] w-[125px] object-contain"
                        src={product.image}
                        alt=""
                      />
                      <Link href={`/product/${product.id}`}>
                        <p className="text-xs underline uppercase line-clamp-1">
                          {product.title}
                        </p>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs">${Math.ceil(product.price).toFixed(2)}</TableCell>
                  <TableCell className="">
                    <div className="flex items-center border border-black rounded-md w-min">
                      <Button
                        onClick={() => decreaseAmount(product.id)}
                        className="text-black bg-transparent"
                      >
                        <Minus className="w-5 aspect-square" />
                      </Button>
                      <p>{product.amount}</p>
                      <Button
                        onClick={() => increaseAmount(product.id)}
                        className="text-black bg-transparent"
                      >
                        <Plus className="w-5 aspect-square" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    $
                    {product.amount
                      ? product.amount * product.price
                      : product.price}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <p className="flex items-center justify-center h-full font-semibold text-center">
          Your cart is empty
        </p>
      )}
      </div>
      {" "}
      <section className="flex justify-between items-center">
        <div className="flex items-center ml-2 gap-1  text-cyan-600">
          <ChevronLeft className="w-5 h-5" />
          <Link className="text-xs uppercase  font-medium" href={"/"}>
            Continue Shopping
          </Link>
        </div>
        <div className="border rounded-md p-3 text-xs font-semibold">{`Total: ${total}`}</div>
      </section>
    </div>
  );
}

export default CartCheckoutTable;
