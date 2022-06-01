import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ className, children, ...otherProps }) {
  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
}
