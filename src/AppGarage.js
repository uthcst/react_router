import './App.css';
import React from 'react';

class Truck extends React.Component {
  render() {
    return <h2>Hi, I am a Truck!</h2>;
  }
}

class Motorcycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  }
  render() {
    return <div>
      <h2>I am a {this.state.color} {this.props.model} Motorcycle!</h2>
    <button type="button"
        onClick={this.changeColor}>Change Motorcycle color</button>
    </div>;
  }
}

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;

}
function Bicycle(props){
  return <h2>I am a {props.info.color} Bicycle!</h2>;
}
function Garage() {
  const bicycleData = {color:"red", brand:"velosolex"};
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car color="red" />
      <Car color="green" />
      <Motorcycle model="XSR-900" />
      <Bicycle info={bicycleData}/>
      <Truck />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Garage Example
        </h1>
        <Garage />
      </header>
    </div>
  );
}

export default App;
