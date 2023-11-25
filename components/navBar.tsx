"use client";
import { useState, useEffect } from "react";
import { ShoppingBag, User2Icon, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import CartItems from "@/components/cart-items";
import Link from "next/link";

// importing context
import { UsingCartContext } from "@/context/cartContext";
import { Button } from "./ui/button";

function NavBar() {
  const { cart, total } = UsingCartContext();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleSticky);

    return () => {
      window.removeEventListener("scroll", toggleSticky);
    };
  }, []);

  const toggleSticky = () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  };

  return (
    <div
      className={`flex items-center ${
        isActive ? "shadow-xl bg-white py-8" : "shadow-none py-8"
      } justify-between fixed w-full px-10 transition-all duration-300 mx-auto z-50 left-0 right-0`}
    >
      <Link href={"/"}>
        <h2 className="font-bold uppercase place-content-center lg:text-xl">
          StellarSales
        </h2>
      </Link>

      <nav className=" lg:w-[25%] ">
        <div className="flex items-center gap-4 place-content-end">
          <Sheet>
            <SheetTrigger className="relative">
              <ShoppingBag className="cursor-pointer w-7 aspect-square" />

              {cart.length > 0 && (
                <span className="absolute flex items-center justify-center w-6 text-xs text-white bg-blue-400 rounded-full aspect-square top-3 -left-3">
                  {cart.length}
                </span>
              )}
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-5 px-2 py-10 ">
              <SheetHeader className="lg:max-h-[550px] lg:min-h-[550px]">
                <h3 className="text-sm font-semibold">{`Cart (${cart.length})`}</h3>
                <CartItems />
              </SheetHeader>
              <SheetFooter className="gap-2 py-3 ">
                <section className="flex flex-col w-full gap-5">
                <article className="flex items-center justify-between w-full">
                  <h4 className="text-sm font-semibold">Total: {" "} <span>${Math.ceil(total).toFixed(2)}</span></h4>

                  <Button variant={"destructive"} className="flex gap-2 w-14">
                    <Trash2 className="w-4 aspect-square" strokeWidth={2} />
                  </Button>
                </article>
                <Button className="w-full text-xs p-0 bg-[#060606]">
                  <Link className="flex items-center justify-center w-full h-full" href={'/checkout'}>
                    Checkout
                  </Link>
                </Button>
                </section>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <User2Icon className="cursor-pointer w-7 aspect-square" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
