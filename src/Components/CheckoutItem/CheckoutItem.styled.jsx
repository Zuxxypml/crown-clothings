import styled, { css } from "styled-components";
const CheckoutItemProps = css`
  width: 23%;
`;
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const CheckoutItemImage = styled.img`
  width: 90%;
  height: 100%;
`;
export const CheckoutItemName = styled.span`
  ${CheckoutItemProps}
`;
export const CheckoutItemQuantity = styled.span`
  ${CheckoutItemProps}
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const CheckoutItemArrow = styled.div`
  cursor: pointer;
`;
export const CheckoutItemPrice = styled.span`
  ${CheckoutItemProps}
`;
export const CheckoutItemRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
