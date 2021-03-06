import styled, { css } from "styled-components";
const getStyles = (props) => {
  if (props.GoogleSignIn) {
    return GoogleSignInStyles;
  }

  return props.inverted ? InvertedStyles : ButtonStyles;
};

const InvertedStyles = css`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const ButtonStyles = css`
  background-color: black;
  border: none;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const GoogleSignInStyles = css`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: darkred;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: darkred;
    border: 1px solid darkred;
  }
`;
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  ${getStyles}
`;
