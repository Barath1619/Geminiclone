import { createContext } from "react";
import run from "../config/gemini";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [resentPromt, setResentPromt] = useState("");
  const [previousPromt, setPreviousPromt] = useState([]);
  const [showResult, setShowResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSend = async (prompt) => {
    await run(prompt);
  };
  const contextValue = {
    previousPromt,
    setPreviousPromt,
    resentPromt,
    setResentPromt,
    showResult,
    setShowResult,
    onSend,
    loading,
    resultData,
    input,
    setInput,
  };

  onSend("tell me about shares today?");
  return (
    <context.Provider value={{ contextValue, onSend }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
