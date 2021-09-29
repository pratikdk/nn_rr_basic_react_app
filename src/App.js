import React from "react";
import Ninjas from "./Ninjas";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :0</p>
        <Ninjas name="Ryu" age="30" belt="black"/>
        <Ninjas name="Yoshi" age="20" belt="White"/>
      </div>
    );
  }
}

export default App;
