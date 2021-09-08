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
      <button className="button-span-2 sp-btn" onClick={handleBackspaceClick}>
        C
      </button>
      <button className="sp-btn" onClick={handleClearClick}>
        AC
      </button>
      {/* <button className="button-blue">+/-</button> */}
      <button
        className="button-blue nm-btn"
        onClick={handleNumberOpClick}
        data-testid="nm-btn-div"
        name="/"
      >
        &divide;
      </button>
      <button
        className="button-gray"
        data-testid="nm-btn-7"
        onClick={handleNumberOpClick}
        name="7"
      >
        7
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="8"
      >
        8
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="9"
      >
        9
      </button>
      <button
        className="button-blue nm-btn"
        data-testid="nm-btn-mul"
        onClick={handleNumberOpClick}
        name="*"
      >
        &times;
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="4"
      >
        4
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="5"
      >
        5
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="6"
      >
        6
      </button>
      <button
        className="button-blue nm-btn"
        onClick={handleNumberOpClick}
        data-testid="nm-btn-sub"
        name="-"
      >
        -
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="1"
      >
        1
      </button>
      <button
        className="button-gray"
        data-testid="nm-btn-2"
        onClick={handleNumberOpClick}
        name="2"
      >
        2
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="3"
      >
        3
      </button>
      <button
        className="button-blue"
        data-testid="nm-btn-sum"
        onClick={handleNumberOpClick}
        name="+"
      >
        +
      </button>
      <button
        className="button-span-2 button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="0"
      >
        0
      </button>
      <button
        className="button-gray nm-btn"
        onClick={handleNumberOpClick}
        name="."
      >
        .
      </button>
      <button
        className="nm-btn"
        data-testid="eq-btn"
        onClick={handleEqualClick}
      >
        =
      </button>
    </Fragment>
  );
};

export default Buttons;
