import { useCallback, useState } from "react";
import "./App.css";
import DisplayCount from "./components/DisplayCount";
import TextInput from "./components/TextInput";
import dotCounter from "./utils/dotCounter";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState("");
  const [displayCounter, setDisplayCounter] = useState({
    text: "",
    dots: 0,
  });

  const handleClick = useCallback(() => {
    if (value) {
      const dots_number = dotCounter(value);
      setDisplayCounter({ text: value, dots: dots_number });
      setValue("");
    }
  }, [value]);

  return (
    <div className="App">
      <DisplayCount item={displayCounter} />
      <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={handleClick} label="بشمار" />
    </div>
  );
}

export default App;
