import React, { memo, useState } from "react";

const RenderTestMemo = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount({});
  };

  console.log("랜더링", count);

  return (
    <div>
      <button onClick={handleOnClick}>버튼</button>
    </div>
  );
};

export default memo(RenderTestMemo);
