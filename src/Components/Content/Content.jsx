import React from "react";
import "./Content.scss";

export default function Content({ title }) {
  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  );
}
