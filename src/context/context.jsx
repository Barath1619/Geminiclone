import { createContext, useState } from "react";
import run from "../config/gemini";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextword) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextword);
    }, 75 * index);
  };

  const onSend = async (prompt) => {
    setShowResult("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPreviousPrompt((prev) => [...prev, input]);
    const response = await run(prompt);
    let responseArray = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");

    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextword = newResponseArray[i];
      delayPara(i, nextword + " ");
    }
    setLoading(false);
    setInput("");
  };
  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    onSend,
    loading,
    resultData,
    input,
    setInput,
  };

  //onSend("tell me about shares today?");
  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default ContextProvider;
