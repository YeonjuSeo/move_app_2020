import React from "react";
//같은 디렉토리 안에 있을 때는 ./으로 위치가 표시됨
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    //변하는 데이터를 위한 object인 state
    count: 0,
  };

  add = () => {
    console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
    // this.setState({ count: this.state.count + 1 })를 대체하는 더 좋은 코드
  };
  minus = () => {
    console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  render() {
    console.log("I'm rendering.");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
