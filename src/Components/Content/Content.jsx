import React from "react";
import {
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./Content.styled";

export default function Content({ title }) {
  return (
    <ContentContainer className="content">
      <ContentTitle className="title">{title}</ContentTitle>
      <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
    </ContentContainer>
  );
}
