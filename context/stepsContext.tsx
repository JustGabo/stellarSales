import React, { useContext, createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

// interface Response {
//     message: string
//     status: number
// }

interface StepState {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  proccesing: boolean;
  setProccesing: React.Dispatch<React.SetStateAction<boolean>>
  response: Record<string, string | number>
  setResponse: React.Dispatch<React.SetStateAction<Record<string, string | number> >>
}

const initialState = {
  step: 1,
  setStep: () => {},
  proccesing: false,
  setProccesing: ()=>{},
  setResponse: ()=>{},
  response: {
    message: "",
    status: 0
  },
};

const StepContext = createContext<StepState>(initialState);

export const UsingStepContext = () => {
  const context = useContext(StepContext);
  return context;
};

export const StepsContextProvider = ({ children }: Props) => {
  const [step, SetStep] = useState(1);
  const [proccesing, setProccesing] = useState(false);
  const [response, setResponse] = useState<Record<string, string | number>>({
    message: "",
    status: 0
  })

  const value = {
    step,
    setStep: SetStep,
    proccesing,
    setProccesing,
    response, 
    setResponse
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
