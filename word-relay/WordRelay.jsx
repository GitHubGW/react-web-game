const React = require("react");

class WordRelay extends React.Component {
  state = {
    word: "리액트",
    value: "",
    result: "",
  };

  input;

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        word: this.state.value,
        value: "",
        result: "✅ 정답",
      });
      this.input.focus();
    } else {
      this.setState({
        value: "",
        result: "❌ 오답",
      });
      this.input.focus();
    }
  };

  onChange = (event) => {
    this.setState({
      value: event.currentTarget.value,
    });
  };

  onRef = (element) => {
    this.input = element;
  };

  render() {
    return (
      <>
        <h1>끝말잇기</h1>
        <h3>{this.state.word}</h3>
        <form onSubmit={this.onSubmit}>
          <input ref={this.onRef} type="text" placeholder="글자 입력" onChange={this.onChange} value={this.state.value} />
        </form>
        <h3>결과: {this.state.result}</h3>
      </>
    );
  }
}

module.exports = WordRelay;
