import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "../Content/Content";
import "./Menu-item.scss";

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
  let navigate = useNavigate();
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => {
        navigate(`${linkUrl}`);
      }}
    >
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
