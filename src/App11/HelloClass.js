import { Component } from "react";

class HelloClass extends Component {
  componentWillMount() {
    console.log("HelloClass componentWillMount");
  }

  componentDidMount() {
    console.log("HelloClass componentDidMount");
  }

  componentWillUnmount() {
    console.log("HelloClass componentWillUnmount");
  }

  componentWillUpdate() {
    console.log("HelloClass componentWillUpdate");
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <h1>{this.props.count}</h1>
      </>
    );
  }
}

export default HelloClass;
