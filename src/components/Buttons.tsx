import React, { Fragment } from "react";
// import styled from "styled-components";

import { useGlobalContext } from "../context/context";
import "./_buttons.scss";

const Buttons = () => {
  const { handleNumberOpClick } = useGlobalContext();
  return (
    <Fragment>
      <button>C</button>
      <button>AC</button>
      <button className="button-blue">+/-</button>
      <button className="button-blue" onClick={handleNumberOpClick}>
        &divide;
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        7
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        8
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        9
      </button>
      <button className="button-blue" onClick={handleNumberOpClick}>
        &times;
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        4
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        5
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        6
      </button>
      <button className="button-blue" onClick={handleNumberOpClick}>
        -
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        1
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        2
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        3
      </button>
      <button className="button-blue" onClick={handleNumberOpClick}>
        +
      </button>
      <button className="button-0 button-gray" onClick={handleNumberOpClick}>
        0
      </button>
      <button className="button-gray" onClick={handleNumberOpClick}>
        .
      </button>
      <button>=</button>
    </Fragment>
  );
};

// const Container = styled.div`
//   button {
//   }
// `;

export default Buttons;
