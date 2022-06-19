import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../Assets/11.3 shopping-bag.svg.svg";

export const CartIconContainer = styled.div`
  width: 50px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 30px;
  height: 30px;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  margin: 2px;
  font-weight: bolder;
  bottom: 12px;
`;
