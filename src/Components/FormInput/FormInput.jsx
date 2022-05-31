import React from "react";
import "./FormInput.scss";

export default function FormInput({ label, handleChange, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? `shrink ` : ""
          } form-input-label`}
        ></label>
      ) : null}
    </div>
  );
}
