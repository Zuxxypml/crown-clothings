import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CollectionTitle = styled.h1`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
export const CollectionItem = styled.div`
  margin-bottom: 30px;
`;
