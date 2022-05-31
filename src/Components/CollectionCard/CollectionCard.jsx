import "./CollectionCard.scss";
import React from "react";

export default function CollectionCard({ id, name, imageUrl, price }) {
  return (
    <div className="collection-card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}
