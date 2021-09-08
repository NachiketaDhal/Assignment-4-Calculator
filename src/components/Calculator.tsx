import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../context/context";
import Buttons from "./Buttons";
import "./_calculator.scss";

const Calculator = () => {
  const { newState } = useGlobalContext();

  const { inputValue } = newState;

  return (
    <Container>
      <section className="form-section">
        <form>
          <input
            type="text"
            data-testid="result"
            value={inputValue}
            onChange={() => {}}
          />
        </form>
      </section>
      <section className="button-section">
        <Buttons />
      </section>
    </Container>
  );
};

const Container = styled.section`
  color: #f2f3f4;
  height: inherit;
  .form-section {
    form {
      input {
        width: 100%;
        padding: 2em 1em;
        font-size: 2em;
        border: none;
        outline: none;
        border-radius: 0.5em;
        background-color: #061017;
        color: #f2f3f4;
        text-align: right;
      }
    }
  }
  .button-section {
    padding: 0.5em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
  }
`;

export default Calculator;
