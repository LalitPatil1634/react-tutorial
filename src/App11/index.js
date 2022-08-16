import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.increaseCount = this.increaseCount.bind(this);

    this.state = {
      count: 0,
      name: "John",
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

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Increment</button>

        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>

        <h1>My age is {this.props.age}</h1>
      </>
    );
  }
}

export default App;
