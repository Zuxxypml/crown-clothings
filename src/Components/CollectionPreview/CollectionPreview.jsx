import "./CollectionPreview.scss";
import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionCard key={item.id} item={item}></CollectionCard>;
          })}
      </div>
    </div>
  );
}
