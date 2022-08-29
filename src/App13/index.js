import { Component } from "react";
import Child from "./Child";

class App13 extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch(error) {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>Error Message: {this.state.errorMessage}</p>
        </>
      );
    }

    return (
      <>
        <div>Hello World</div>
        <Child />
      </>
    );
  }
}

export default App13;
