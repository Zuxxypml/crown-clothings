import React from "react";
import Content from "../Content/Content";
import "./Menu-item.scss";
export default function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      ></div>
      <Content title={title} className="content" />
    </div>
  );
}
