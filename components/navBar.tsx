import { useState, useEffect } from "react";
import { ShoppingBag, User2Icon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItems from "@/components/cart-items";

// importing context
import { UsingCartContext } from "@/context/cartContext";

function NavBar() {
  const { cart } = UsingCartContext();
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
    <div className={`flex items-center ${isActive? "shadow-xl bg-white py-5" : "shadow-none py-5"} justify-between fixed w-full px-10 transition-all duration-300 mx-auto z-50 left-0 right-0`}>
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
            <SheetContent className=" px-2 flex flex-col gap-5 overflow-y-auto">
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
