"use client";
import CardInfo from "@/components/card-information-checkout";
import Checking from "@/components/checking-checkout";
import { UsingStepContext } from "@/context/stepsContext";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CheckoutForm() {
  const { setStep, step, proccesing } = UsingStepContext();
  //   const checkoutSteps = {
  //     first: <Checking />,
  //     second: <CardInfo />,
  //   };

  return (
    <section className=" w-full p-5 h-full ">
      {proccesing == false ? (
        <section className="justify-between h-full gap-3 flex flex-col ">
          <article className="flex items-center m-auto ">
            <div className={`flex flex-col items-center text-cyan-500`}>
              <span className="text-[10px] font-semibold">Checking</span>
              <div className="w-5 aspect-square rounded-full bg-cyan-500 text-[10px] text-white flex items-center justify-center">
                1
              </div>
            </div>
            <span
              className={`w-24 rounded-sm h-[2px] mt-4  ${
                step == 2
                  ? "bg-cyan-500  transition-all duration-100"
                  : "bg-gray-500   transition-all duration-500"
              }`}
            />
            <div className="flex flex-col items-center">
              <span
                className={`text-[10px] font-semibold ${
                  step == 2
                    ? "text-cyan-500 transition-all duration-500"
                    : "text-gray-500  transition-all duration-300"
                }`}
              >
                Payment
              </span>
              <div
                className={`w-5 aspect-square rounded-full  text-[10px] text-white flex items-center justify-center ${
                  step == 2
                    ? "bg-cyan-500 transition-all duration-500"
                    : "bg-gray-500  transition-all duration-300"
                }`}
              >
                2{" "}
              </div>
            </div>

            {/* <div className="w-2 aspect-square rounded-full bg-cyan-600"></div> */}
          </article>

          {step == 1 ? <Checking /> : <CardInfo />}

          <article className="flex items-center  justify-between w-full">
            {step == 2 && (
              <Button
                onClick={() => setStep(1)}
                className=" text-sm mr-auto bg-transparent text-gray-500 p-0 w-min"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            )}
            {step == 1 && (
              <Button
                onClick={() => setStep(2)}
                className=" text-sm ml-auto bg-transparent text-gray-500 p-0 w-min"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </article>
        </section>
      ) : <CardInfo/>}
    </section>
  );
}

export default CheckoutForm;
