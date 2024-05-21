import { createContext } from "react";
import run from "../config/genimi";
import { useState } from "react";
 export const Context = createContext();

const ContextProvider = (props) => {
  const [input , setInput] = useState("");
  const [recentPrompt , setRescentPrompt] = useState("");
  const [ prevPrompt , setPrevPrompt] = useState([]);
  const[showResult, setShowResult] = useState(false);
  const [loading , setLoading] = useState(false);
  const [resultData , setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRescentPrompt(input);
    const response =  await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");

  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    input,
    setInput,
    recentPrompt,
    setRescentPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;