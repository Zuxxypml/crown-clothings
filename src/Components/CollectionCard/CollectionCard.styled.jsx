import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

const getImageURL = (props) => props.src;
export const CollectionCardOverlayButton = styled(CustomButton)`
  position: absolute;
  top: 245px;
  opacity: 0.7;
  width: 70%;
  display: none;
  &:hover {
    opacity: 0.85;
    display: block;
  }
`;

export const CollectionCardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

export const CollectionCardFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  box-sizing: border-box;
  margin-top: 10px;
`;
export const CollectionCardItemName = styled.span`
  width: 85%;
  margin-bottom: 15px;
`;
export const CollectionCardItemPrice = styled.span`
  width: auto;
`;
export const CollectionCardImage = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url(${getImageURL});
  &:hover {
    opacity: 0.8;
  }
  &:hover ~ ${CollectionCardOverlayButton} {
    opacity: 0.85;
    display: block;
  }
`;
