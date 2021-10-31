import React from "react";

class RenderTest extends React.PureComponent {
  state = {
    count: 0,
  };

  handleOnClick = () => {
    this.setState({});
  };

  render() {
    console.log("랜더링", this.state);

    return (
      <div>
        <button onClick={this.handleOnClick}>버튼</button>
      </div>
    );
  }
}

export default RenderTest;
