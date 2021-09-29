import React from "react";
import Ninjas from "./Ninjas";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :0</p>
        <Ninjas />
      </div>
    );
  }
}

export default App;
