import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
    };
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  render() {
    return (
      <div
        style={{
          width: "30%",
          margin: "20px auto",
          backgroundColor: "lightgreen",
        }}
      >
        <h2>Class Component</h2>
        <h3>This is a class based component</h3>
        <h3>Type : {this.props.name_prop} (Coming from Props)</h3>
        <h3>Count: {this.state.count}</h3>
        <h3>Count2: {this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
              count2: this.state.count2 - 1,
            });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
export default ProfileClass;
