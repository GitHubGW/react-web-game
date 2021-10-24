import React, { useState } from "react";

const NumberBaseball = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tryNumber, setTryNumber] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const getNumbers = () => {};

  return (
    <>
      <h1>숫자야구</h1>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={onChange} value={value} maxLength="3"></input>
      </form>
      <h2>
        시도한 횟수: {tryNumber} / {result}
      </h2>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default NumberBaseball;
