import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
// import { shallow, mount } from "enzyme";

// describe("Buttons Component", () => {
//   // it("It should render without errors", () => {
//   //   const component = shallow(<Buttons />);
//   //   const wrapper = component.find(".button-span-2");
//   //   expect(wrapper.length).toBe(2);
//   // });

//   it("It should return the correct result", () => {
//     const component = mount(<App />);
//     // console.log(component.debug());
//     const btn7 = component.find("#nm-btn-7");
//     const btnSum = component.find("#nm-btn-sum");
//     const btn2 = component.find("#nm-btn-2");
//     const btnEql = component.find("#eq-btn");

//     // expect(btn2).to.have.length(1);

//     // component.find("#nm-btn-7").props().onClick();

//     component.find("#nm-btn-7").simulate("click");
//     component.find("#nm-btn-7").simulate("click");
//     component.find("#nm-btn-sum").simulate("click");
//     component.find("#nm-btn-2").simulate("click");
//     component.find("#eq-btn").simulate("click");
//     // console.log(component.find(".inp").getElements()[0].props.value);
//     console.log(component.find(".result").text());
//     expect(component.find(".result").text()).toBe("9");
//   });
// });

describe("Calculator test", () => {
  const { getByTestId } = render(<App />);

  const btn7 = getByTestId("nm-btn-7");
  const btnSum = getByTestId("nm-btn-sum");
  const btn2 = getByTestId("nm-btn-2");
  const btnEql = getByTestId("eq-btn");
  const result = getByTestId("result");

  // expect(btn7.textContent).toBe("7");
  it("should return the correct sum value", () => {
    fireEvent.click(btn7);
    fireEvent.click(btnSum);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    console.log(result.textContent);
    expect(result.textContent).toBe("9");
  });
});
