import React, { Fragment } from "react";

import { useGlobalContext } from "../context/context";
import "./_buttons.scss";

const Buttons = () => {
  const {
    handleNumberOpClick,
    handleEqualClick,
    handleClearClick,
    handleBackspaceClick,
  } = useGlobalContext();

  return (
    <Fragment>
      <button className="button-span-2" onClick={handleBackspaceClick}>
        C
      </button>
      <button onClick={handleClearClick}>AC</button>
      {/* <button className="button-blue">+/-</button> */}
      <button className="button-blue" onClick={handleNumberOpClick} name="/">
        &divide;
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="7">
        7
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="8">
        8
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="9">
        9
      </button>
      <button className="button-blue" onClick={handleNumberOpClick} name="*">
        &times;
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="4">
        4
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="5">
        5
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="6">
        6
      </button>
      <button className="button-blue" onClick={handleNumberOpClick} name="-">
        -
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="1">
        1
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="2">
        2
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name="3">
        3
      </button>
      <button className="button-blue" onClick={handleNumberOpClick} name="+">
        +
      </button>
      <button
        className="button-span-2 button-gray"
        onClick={handleNumberOpClick}
        name="0"
      >
        0
      </button>
      <button className="button-gray" onClick={handleNumberOpClick} name=".">
        .
      </button>
      <button onClick={handleEqualClick}>=</button>
    </Fragment>
  );
};

export default Buttons;
