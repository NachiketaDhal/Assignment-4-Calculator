import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

describe("Calculator test", () => {
  it("should return the correct sum value", () => {
    const { getByTestId } = render(<App />);

    const btn7 = getByTestId("nm-btn-7");
    const btnSum = getByTestId("nm-btn-sum");
    const btn2 = getByTestId("nm-btn-2");
    const btnEql = getByTestId("eq-btn");
    const result = getByTestId("result");
    fireEvent.click(btn7);
    fireEvent.click(btnSum);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("9");
  });

  it("should return the correct subtract value", () => {
    const { getByTestId } = render(<App />);

    const btn7 = getByTestId("nm-btn-7");
    const btnSub = getByTestId("nm-btn-sub");
    const btn2 = getByTestId("nm-btn-2");
    const btnEql = getByTestId("eq-btn");
    const result = getByTestId("result");
    fireEvent.click(btn7);
    fireEvent.click(btnSub);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("5");
  });

  it("should return the correct multiplication value", () => {
    const { getByTestId } = render(<App />);

    const btn7 = getByTestId("nm-btn-7");
    const btnMul = getByTestId("nm-btn-mul");
    const btn2 = getByTestId("nm-btn-2");
    const btnEql = getByTestId("eq-btn");
    const result = getByTestId("result");
    fireEvent.click(btn7);
    fireEvent.click(btnMul);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("14");
  });

  it("should return the correct division value", () => {
    const { getByTestId } = render(<App />);

    const btn7 = getByTestId("nm-btn-7");
    const btnDiv = getByTestId("nm-btn-div");
    const btn2 = getByTestId("nm-btn-2");
    const btnEql = getByTestId("eq-btn");
    const result = getByTestId("result");
    fireEvent.click(btn7);
    fireEvent.click(btnDiv);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("3.5");
  });
});
