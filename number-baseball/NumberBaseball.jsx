import React, { useRef, useState } from "react";

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
      return alert("🥲 게임 오버");
    }

    if (+value === result) {
      ul.current.innerHTML = "";
      setValue("");
      setTryNumber(0);
      setResult(Math.round(Math.random() * 20));
      return alert("✅ 정답!");
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
      <h1>숫자야구</h1>
      <h4>1~20까지의 숫자 중에서 하나의 숫자를 맞춰보세요.</h4>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={onChange} value={value} maxLength="2"></input>
      </form>
      <h2>남은 기회: {10 - tryNumber}</h2>
      <ul ref={ul}></ul>
    </>
  );
};

export default NumberBaseball;
