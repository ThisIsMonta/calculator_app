import {evaluate} from "mathjs";
import React, { useEffect, useState } from "react";
import "./calculator.css";
const Calculator = () => {
  // const [result, setResult] = useState(0);
  const [output, setOutput] = useState(null);

  useEffect(() => {
    document.addEventListener('keydown', (event) =>{
      if(event.key == 'Enter'){
        calculateOutput();
      }
      if(event.key == 'Delete'){
        setOutput("0");
      }
    });
  });

  const calculateOutput = () =>{
    var result = evaluate(output);
    setOutput(result)
  }

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="text"
        value={output}
        onChange={(e) => {
          setOutput(e.target.value);
        }}
        className="output"
      />
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            if(output === null) {
                setOutput("0");
                return;
            }
            setOutput(0);
          }}
        >
          C
        </button>
        <button
          className="button"
          onClick={() => {
            if(output === null) {
              setOutput("(");
              return;
            }
            if(output.toString().indexOf("(") === -1) {
                setOutput("("+output);
                return;
            }
            if(output.toString().indexOf(")") === -1) {
                setOutput(output+")");
                return;
            }
          }}
        >
          ()
        </button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("%");
                return;
            }
            setOutput(output+"%");
          }}>%</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("/");
                return;
            }
            setOutput(output+"/");
          }}>/</button>
        <button
          className="button"
          onClick={() => {
            if(output === null) {
                setOutput("9");
                return;
            }
            setOutput(output+"9");
          }}
        >
          9
        </button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("8");
                return;
            }
            setOutput(output+"8");
          }}>8</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("9");
                return;
            }
            setOutput(output+"7");
          }}>7</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("9");
                return;
            }
            setOutput(output+"*");
          }}>*</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("9");
                return;
            }
            setOutput(output+"6");
          }}>6</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("5");
                return;
            }
            setOutput(output+"5");
          }}>5</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("4");
                return;
            }
            setOutput(output+"4");
          }}>4</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("-");
                return;
            }
            setOutput(output+"-");
          }}>-</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("3");
                return;
            }
            setOutput(output+"3");
          }}>3</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("2");
                return;
            }
            setOutput(output+"2");
          }}>2</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("1");
                return;
            }
            setOutput(output+"1");
          }}>1</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("+");
                return;
            }
            setOutput(output+"+");
          }}>+</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput("0");
                return;
            }
            setOutput(output+"0");
          }}>0</button>
        <button className="button" onClick={() => {
            if(output === null) {
                setOutput(".");
                return;
            }
            if(output.toString().indexOf(".") === -1) {
                setOutput(output+".");
            }
          }}>.</button>
        <button className="button" onClick={() => {
            calculateOutput();
          }}>=</button>
        <button className="button" onClick={() => {
            setOutput(output.toString().slice(0, -1));
          }}>␡</button>
      </div>
    </div>
  );
};

export default Calculator;
