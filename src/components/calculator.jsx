import { useState } from "react";
import { RxButton } from "react-icons/rx";

const Calculator = () => {

    const [result, setResult] = useState(0);
    const [resultDisplayed, setResultDisplaied] = useState(false);

    function HandleCount(e) {
        if (resultDisplayed == true) {
            setResultDisplaied(false);
            setResult(e.target.innerText);
        }

        else {
            result === 0 ? setResult(e.target.innerText) :
        setResult(result + e.target.innerText)
        }
      }

    function HandleResult () {
        const fixed = result.replace(/x/g, "*");
        setResult(eval(fixed));
        setResultDisplaied(true);
    }

    function HandleDelete() {
        let newResult = result.slice(0, -1);
        setResult(newResult);
    }

    return (
        <div className="mx-auto h-72 w-52 mt-10 shadow-lg shadow-black rounded-2xl  flex bg-zinc-950 flex-col">
            <span
            className="border mx-auto w-48 h-10 my-6 bg-zinc-700 rounded-lg flex justify-end items-center pr-2 overflow-x-auto border-zinc-600 text-white text-2xl"
            >{result}</span>

            <div>
                <button onClick={HandleCount} className="btn-button">1</button>
                <button onClick={HandleCount} className="btn-button">2</button>
                <button onClick={HandleCount} className="btn-button">3</button>
                <button onClick={HandleCount} className="btn-button text-white">x</button>
                <button onClick={HandleCount} className="btn-button">4</button>
                <button onClick={HandleCount} className="btn-button">5</button>
                <button onClick={HandleCount} className="btn-button">6</button>
                <button onClick={HandleCount} className="btn-button text-white">-</button>
                <button onClick={HandleCount} className="btn-button">7</button>
                <button onClick={HandleCount} className="btn-button">8</button>
                <button onClick={HandleCount} className="btn-button">9</button>
                <button onClick={HandleCount} className="btn-button text-white">+</button>
                <button onClick={HandleCount} className="btn-button text-white">/</button>
                <button onClick={HandleCount} className="btn-button">0</button>
                <button onClick={HandleCount} className="btn-button text-white">.</button>
                <button onClick={HandleResult} className="btn-button bg-red-700 hover:bg-red-950 text-white">=</button>
                <button onClick={HandleDelete} className="relative left-20 bg-red-600 rounded-lg hover:bg-red-950"> 
                <RxButton className="text-white h-6 w-10 text-white"/> </button>
            </div>

        </div>
    )
}

export default Calculator;