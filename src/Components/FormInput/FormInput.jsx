import React from "react";
import {
  FormInputGroupContainer,
  FormInputInput,
  FormInputLabel,
} from "./FormInput.styled";
export default function FormInput({ label, handleChange, ...otherProps }) {
  return (
    <FormInputGroupContainer>
      <FormInputInput onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel {...otherProps.value.length}></FormInputLabel>
      ) : null}
    </FormInputGroupContainer>
  );
}
// I need to comeback to do Something here
