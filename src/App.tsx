import React from "react";
import styled from "styled-components";

import Calculator from "./components/Calculator";
import "./_app.scss";

function App() {
  return (
    <Main>
      <div>
        <Calculator />
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  place-items: center;
  min-height: 100vh;
  div {
    width: 30%;
    height: 70vh;
    background-color: #061017;
    border-radius: 0.5em;
  }
`;

export default App;
