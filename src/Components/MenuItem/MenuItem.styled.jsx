import styled, { css } from "styled-components";
const getImageURL = (props) => props.src;
const largeStyle = css`
  height: 380px;
`;
const checkIfLarge = (props) => {
  if (props.large !== undefined) {
    return largeStyle;
  } else return;
};
export const MenuItemContent = styled.div`
  position: absolute;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
export const MenuItemImage = styled.div`
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-image: url(${getImageURL});
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  ${checkIfLarge}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;
  }
`;
