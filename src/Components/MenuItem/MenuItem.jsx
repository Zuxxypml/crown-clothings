import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "../Content/Content";
import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemImage,
} from "./MenuItem.styled";

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
  let navigate = useNavigate();
  return (
    <MenuItemContainer
      large={size}
      onClick={() => {
        navigate(`${linkUrl}`);
      }}
    >
      <MenuItemImage src={imageUrl} />
      <MenuItemContent>
        <Content title={title} />
      </MenuItemContent>
    </MenuItemContainer>
  );
}
