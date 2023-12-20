("");
import { UsingCartContext } from "@/context/cartContext";
import { useState, useEffect } from "react";

const Checking = () => {
  const { cart, total } = UsingCartContext();
  const [men, setMen] = useState<number>();
  const [women, setWomen] = useState<number>();
  const [electronic, setElectronic] = useState<number>();
  const [jewerely, setJewerely] = useState<number>();
  const repetedProducts = cart.filter((product) => product.amount! > 1);

  const settingCategories = () => {
    const menCategory = cart.filter(
      (product) => product.category == "men's clothing"
    );
    const womenCategory = cart.filter(
      (product) => product.category == "women's clothing"
    );
    const electroCategory = cart.filter(
      (product) => product.category == "electronics"
    );
    const jeweleryCategory = cart.filter(
      (product) => product.category == "jewelery"
    );

    setWomen(womenCategory.length);
    setElectronic(electroCategory.length);
    setJewerely(jeweleryCategory.length);
    setMen(menCategory.length);
  };

  useEffect(() => {
    settingCategories();
  }, [cart]);

  return (
    <section className="h-full mt-5 flex flex-col gap-5">
      <strong>Bill</strong>

      <article className="flex flex-col gap-5">
        <div className="flex text-xs justify-between items-center">
          <span className="font-medium">Repeated Products</span>
          <strong>{`x${repetedProducts.length}`}</strong>
        </div>

        {men! > 0 && (
          <div className="flex text-xs justify-between items-center">
            <span className="font-medium">Men's Category Products</span>
            <strong>{`x${men}`}</strong>
          </div>
        )}

        {women! > 0 && (
          <div className="flex text-xs justify-between items-center">
            <span className="font-medium">Women's Category Products</span>
            <strong>{`x${women}`}</strong>
          </div>
        )}

        {electronic! > 0 && (
          <div className="flex text-xs justify-between items-center">
            <span className="font-medium">Electronic's Category Products</span>
            <strong>{`x${electronic}`}</strong>
          </div>
        )}

        {jewerely! > 0 && (
          <div className="flex text-xs justify-between items-center">
            <span className="font-medium">Jewerely's Category Products</span>
            <strong>{`x${jewerely}`}</strong>
          </div>
        )}

        <div className="flex text-xs justify-between items-center">
          <span className="font-medium">Total Products</span>
          <strong>x{cart.length}</strong>
        </div>

        <div className="flex text-xs justify-between items-center">
          <span className="font-medium">Total</span>
          <strong>${total}</strong>
        </div>
      </article>
    </section>
  );
};

export default Checking;
