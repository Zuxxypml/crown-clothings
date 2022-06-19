import styled, { css } from "styled-components";

const subColor = "grey";
const mainBlack = "black";
// const checkValueLength = (props) => {
//   console.log(props);
// };

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainBlack};
`;
export const FormInputGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;
export const FormInputInput = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${shrinkLabel}
  }
`;
export const FormInputLabel = styled.label`
  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;
