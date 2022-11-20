import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    //Se o prev for igual a 0 não vai por nada, se não vai colocar o prev.
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const clearNumber = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const sumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const subtractNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const multiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("X");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const divideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const equalSign = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          sumNumbers();
          break;
        case "-":
          subtractNumber();
          break;
        case "X":
          multiplyNumbers();
          break;
        case "/":
          divideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="w-full h-screen bg-slate-200 flex items-center justify-center">
      <div className="bg-slate-100 w-1/2">
        <Input value={currentNumber} />
        <div className="flex flex-row justify-between items-center">
          <Button label="X" onClick={multiplyNumbers} />
          <Button label="/" onClick={divideNumbers} />
          <Button label="c" onClick={clearNumber} />
          <Button label=".." />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={subtractNumber} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={sumNumbers} />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={equalSign} />
        </div>
      </div>
    </div>
  );
}

export default App;
