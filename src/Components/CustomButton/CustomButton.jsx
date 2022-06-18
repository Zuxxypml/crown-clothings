import React from "react";
import { CustomButtonContainer } from "./CustomButton.styled";

export default function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}
