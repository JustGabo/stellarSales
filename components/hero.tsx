import React from "react";

function Hero() {
  return (
    <main className="flex flex-col gap-3">
      <div className="flex items-center gap-2 ">
        <div className="h-[2px] w-16 bg-cyan-900"></div>
        <p className="text-sm  uppercase font-medium">New Trend</p>
      </div>
      <div className="uppercase w-[90%] lg:text-7xl">
        <p className="font-light ">
          StellarSales sale stylish <span className="font-semibold">Chlothes</span>
        </p>
      </div>
    </main>
  );
}

export default Hero;
