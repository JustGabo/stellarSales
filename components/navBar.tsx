import { ShoppingBag, User2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItems from '@/components/cart-items'

// importing context
import { UsingCartContext } from "@/context/cartContext";

function NavBar() {
  const { cart } = UsingCartContext();

  return (
    <div className="flex items-center  justify-between">
      <h2 className="place-content-center uppercase lg:text-xl font-bold">
        StellarSales
      </h2>
      <nav className=" lg:w-[25%] ">
        <div className="flex items-center gap-4 place-content-end">
          <Sheet>
            <SheetTrigger className="relative">
              <ShoppingBag className="w-7 cursor-pointer aspect-square" />

              {cart.length > 0 && (
                <span className="w-6 flex items-center justify-center aspect-square absolute top-3 text-xs -left-3 bg-blue-400 text-white rounded-full">
                  {cart.length}
                </span>
              )}
            </SheetTrigger>
            <SheetContent  className="pt-12 px-2 overflow-y-auto">
              <SheetHeader>
                <h3>{`Cart (${cart.length})`}</h3>
              </SheetHeader>
              <CartItems />
            </SheetContent>
          </Sheet>
          <User2Icon className="w-7 cursor-pointer aspect-square" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
