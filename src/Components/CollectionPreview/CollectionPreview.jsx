import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import CollectionPreviewContainer, {
  CollectionPreviewPreview,
  CollectionPreviewTitle,
} from "./CollectionPreview.styled";
export default function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title}</CollectionPreviewTitle>
      <CollectionPreviewPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionCard key={item.id} item={item}></CollectionCard>;
          })}
      </CollectionPreviewPreview>
    </CollectionPreviewContainer>
  );
}
