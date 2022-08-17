import { Component } from "react";

import HelloClass from "./HelloClass";

class App extends Component {
  constructor(props) {
    super(props);

    this.increaseCount = this.increaseCount.bind(this);

    this.state = {
      count: 0,
      name: "John",
      isHelloVisible: true,
    };
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  // No need to bind this because this is an arrow function
  changeName = () => {
    if (this.state.name === "John") {
      this.setState({ name: "Alice" });
    } else {
      this.setState({ name: "John" });
    }
  };

  toggleHelloVisibility = () => {
    this.setState({ isHelloVisible: !this.state.isHelloVisible });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Increment</button>

        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>

        <h1>My age is {this.props.age}</h1>

        {this.state.isHelloVisible && <HelloClass count={this.state.count} />}
        <button onClick={this.toggleHelloVisibility}>
          Toggle Hello Visibility
        </button>
      </>
    );
  }
}

export default App;
