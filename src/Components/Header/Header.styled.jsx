import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  width: 80px;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;
