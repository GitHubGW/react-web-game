class MultiplicationTable extends React.Component {
  state = {
    firstNumber: Math.ceil(Math.random() * 9),
    secondNumber: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  };

  render() {
    console.log("render");

    const onRef = (element) => {
      // console.log("element", element);
    };

    const onSubmit = (event) => {
      event.preventDefault();
      const resultNumber = this.state.firstNumber * this.state.secondNumber;

      if (resultNumber === +this.state.value) {
        this.setState((previousState) => {
          return {
            firstNumber: Math.ceil(Math.random() * 9),
            secondNumber: Math.ceil(Math.random() * 9),
            value: "",
            result: `✅ 정답: ${previousState.value}`,
          };
        });
      } else {
        this.setState(() => {
          return {
            value: "",
            result: `❌ 오답:`,
          };
        });
      }
    };

    const onChange = (event) => {
      this.setState({
        value: event.target.value,
      });
    };

    return (
      <>
        <h1>구구단</h1>
        <h3>
          {this.state.firstNumber} 곱하기 {this.state.secondNumber}는?
        </h3>
        <form onSubmit={onSubmit}>
          <input ref={onRef} type="number" placeholder="숫자 입력" value={this.state.value} onChange={onChange} />
          <button type="submit">입력</button>
        </form>
        <h3>결과: {this.state.result}</h3>
      </>
    );
  }
}
