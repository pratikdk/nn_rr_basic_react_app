import React from "react";
import Ninjas from "./Ninjas";

class App extends React.Component {
  state = {
    ninjas : [
      {name: "Ryu", age:"30", belt:"black", id: 1},
      {name: "Yoshi", age:"20", belt:"White", id: 2},
      {name: "Jane", age:"25", belt:"Green", id: 3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :0</p>
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
    );
  }
}

export default App;
