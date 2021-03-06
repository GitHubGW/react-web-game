import React, { memo, useRef, useState } from "react";

const NumberBaseball = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(Math.round(Math.random() * 20));
  const [tryNumber, setTryNumber] = useState(0);
  const ul = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    if (tryNumber === 9) {
      ul.current.innerHTML = "";
      setValue("");
      setTryNumber(0);
      setResult(Math.round(Math.random() * 20));
      return alert("π₯² κ²μ μ€λ²");
    }

    if (+value === result) {
      ul.current.innerHTML = "";
      setValue("");
      setTryNumber(0);
      setResult(Math.round(Math.random() * 20));
      return alert("β μ λ΅!");
    } else {
      const li = document.createElement("li");
      li.innerText = value;
      ul.current.appendChild(li);
      setValue("");
      setTryNumber((prevTryNumber) => prevTryNumber + 1);
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h1>μ«μμΌκ΅¬</h1>
      <h4>1~20κΉμ§μ μ«μ μ€μμ νλμ μ«μλ₯Ό λ§μΆ°λ³΄μΈμ.</h4>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={onChange} value={value} maxLength="2"></input>
      </form>
      <h2>λ¨μ κΈ°ν: {10 - tryNumber}</h2>
      <ul ref={ul}></ul>
    </>
  );
};

export default memo(NumberBaseball);
