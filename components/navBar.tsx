import React from "react";
import { ShoppingBag, User2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavBar() {
  return (
    <div className="flex items-center  justify-between">
      <span className="text-sm lg:w-[25%]">
        Free shipping and 30 days returns
      </span>
      <h2 className="place-content-center tracking-wider lg:text-2xl">
        StellarSales
      </h2>
      <nav className=" lg:w-[25%] ">
        <div className="flex items-center gap-4 place-content-end">
          <Sheet >
            <SheetTrigger>
              <ShoppingBag className="w-5 aspect-square" />
            </SheetTrigger>
            <SheetContent className="pt-12">
                <SheetHeader>
                    <h3>{`Cart (2)`}</h3>   
                </SheetHeader>
            </SheetContent>
          </Sheet>
          <User2Icon className="w-5 aspect-square" />

        </div>
      </nav>
    </div>
  );
}

export default NavBar;
