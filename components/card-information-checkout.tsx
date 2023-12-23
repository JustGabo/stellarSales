"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { UsingStepContext } from "@/context/stepsContext";

interface SubmitPayload {
  card: string;
  date: string;
  cvv: string;
  name: string;
  event: React.FormEvent<HTMLFormElement>;
}

const CardInformation = () => {
  //   usestates
  const [card, setCard] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [numberError, setNumberError] = useState<string>();
  const [dateError, setDateError] = useState<string>();
  const [cvvError, setCvvError] = useState<string>();
  const [nameError, setNameError] = useState<string>();
  const { setProccesing, proccesing } = UsingStepContext();
  const [messsageRes, setMessageRes] = useState("");
  const [statusRes, setStatusRes] = useState(0);

  useEffect(() => {
    if (statusRes >= 400 && statusRes <= 500) {
      console.log("Ha ocurrido on error", statusRes);
    }
    console.log("exec check status", statusRes);
  }, [statusRes]);

  const handleSubmi = async ({
    card,
    date,
    cvv,
    name,
    event,
  }: SubmitPayload) => {
    event.preventDefault();
    setNumberError("");
    setDateError("");
    setCvvError("");
    setNameError("");
    if (
      card.length > 2 &&
      date.length > 2 &&
      cvv.length > 2 &&
      name.length > 1
    ) {
      setProccesing(true);

      const { message, status } = await payment();

      console.log(message, status);

      setMessageRes(message);
      setStatusRes(status);
    } else if (card.length < 1) {
      setNumberError("Empty Card Number, please fill the Input.");
    } else if (date.length < 1) {
      setDateError("Empty Exp Date, please fill the Input.");
    } else if (cvv.length < 1) {
      setCvvError("Empty Cvv, please fill the Input.");
    } else if (name.length < 1) {
      setNameError("Empty Name, please fill the Input.");
    } else {
      console.log("something went wrong");
    }
  };

  const payment = async () => {
    const data = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ card, expdate: date, cvv, name }),
    });

    return await data.json();
  };

  return (
    <section className=" w-full  relative  flex flex-col gap-7">
      <h2 className="text-xl capitalize font-medium">
        {/* Fill your card information */}
      </h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await handleSubmi({ card, date, cvv, name, event });
        }}
        className="text-xs text-gray-800 font-semibold grid gap-4"
      >
        <div className="flex flex-col gap-2">
          {numberError ? (
            <span className="text-red-500 text-[10px]">{numberError}</span>
          ) : (
            <label htmlFor="cardnumber">Cardnumber</label>
          )}
          <Input
          required
          onChange={(e) => setCard(e.target.value)}
            name="card"
            className="text-xs text-gray-500 placeholder:text-gray-300"
            id="cardnumber"
            placeholder="4829 1037 2185 5673"
            type="number"
          />
        </div>

        <article className="flex gap-3">
          <div className="w-[65%] flex flex-col gap-2">
            {dateError ? (
              <span className="text-red-500 text-[10px]">{dateError}</span>
            ) : (
              <label htmlFor="date">Expiry Date</label>
            )}
            <Input
            required
              onChange={(e) => setDate(e.target.value)}
              name="expdate"
              id="date"
              className="text-xs  text-gray-500 placeholder:text-gray-300"
              placeholder="MM/YY"
              type="number"
            />
          </div>

          <div className="w-[35%] flex flex-col gap-2">
            {cvvError ? (
              <span className="text-red-500 text-[10px] line-clamp-1">
                {cvvError}
              </span>
            ) : (
              <label htmlFor="cvv">CVV</label>
            )}
            <Input
            required
              onChange={(e) => setCvv(e.target.value)}
              name="cvv"
              id="cvv"
              className="text-xs  text-gray-500 placeholder:text-gray-300"
              type="number"
              placeholder="***"
            />
          </div>
        </article>

        <div className="flex flex-col gap-2">
          {nameError ? (
            <span className="text-red-500 text-[10px]">{nameError}</span>
          ) : (
            <label htmlFor="name">Cardholder name</label>
          )}
          <Input
          required
          minLength={1}
          maxLength={2}
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="text-xs  text-gray-500 placeholder:text-gray-300"
            id="name"
            placeholder="Alexander Louis"
          />
        </div>
        {/* <article className="flex gap-5 items-center"> */}

        <Button
          className="bg-cyan-500 w-full mt-1  transition-all duration-150 hover:bg-cyan-600"
          type="submit"
        >
          Pay
        </Button>
        {/* </article> */}
      </form>
      {proccesing && (
        <div className="absolute w-full h-full  bg-gray-50 flex items-center justify-center text-xs font-semibold">
          {statusRes !== 0 ? (
            <div>
              {statusRes == 400 ? (
                <span>
                  The payment could not be completed succesfully due to an:{" "}
                  <span>{messsageRes}</span>
                </span>
              ) : (
                <span>Your Payment was completed succesfully</span>
              )}
            </div>
          ) : (
            <span>We are processing your payment</span>
          )}
        </div>
      )}
    </section>
  );
};

export default CardInformation;
