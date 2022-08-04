import React, { memo } from "react";

const DisplayCount = ({ item }) => {
  const { dots, text } = item;
  return (
    <div className="display-count-box">
      {text && (
        <>
          <h2>
            تعداد نقطه ها: <span>{dots}</span>
          </h2>
          <h4>
            متن: <span>{text}</span>
          </h4>
        </>
      )}
    </div>
  );
};

export default memo(DisplayCount);
