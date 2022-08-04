import React, { memo } from "react";

const Button = ({ onClick, label }) => {
  return (
    <button className="bt" onClick={onClick}>
      {label}
    </button>
  );
};

export default memo(Button);
