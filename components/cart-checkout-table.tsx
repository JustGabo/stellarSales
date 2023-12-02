"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableFooter,
  TableRow,
  TableHeader,
  TableCaption,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

// importing context
import { UsingCartContext } from "@/context/cartContext";

function CartCheckoutTable() {
  // context
  const { cart, increaseAmount, decreaseAmount } = UsingCartContext();

  return (
    <div className="h-full ">
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
                    <TableCell className="font-medium ">
                      <div className="flex items-center gap-5">
                        <img
                          className="h-[125px] w-[125px] object-contain"
                          src={product.image}
                          alt=""
                        />
                        <Link href={`/product/${product.id}`}>
                        <p className="text-xs underline uppercase line-clamp-1">
                          {product.title}
                        </p></Link>
                      </div>
                    </TableCell>
                    <TableCell>${product.price}</TableCell>
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
  );
}

export default CartCheckoutTable;
