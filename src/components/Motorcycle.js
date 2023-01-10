import React from 'react';

export default class Motorcycle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "red" };
    }
    changeColor = () => {
      this.setState({ color: "blue" });
    }
    render() {
      return <div>
        <h3>I am a {this.state.color} {this.props.model} Motorcycle!</h3>
      <button type="button"
          onClick={this.changeColor}>Change Motorcycle color</button>
      </div>;
    }
  }
  