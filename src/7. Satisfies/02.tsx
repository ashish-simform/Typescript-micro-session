import React from "react";
import { ComponentProps } from "react";

const buttonProps = {
  type: "button",
  //This should be erroring! Why isn't it ?
  // illegalProperty: "I AM ILLEGAL",
  // sdfdsf: "",

  //we can use satisfies
} satisfies ComponentProps<"button">;

const Test4 = () => {
  return <button {...buttonProps}>Test4</button>;
};

export default Test4;
