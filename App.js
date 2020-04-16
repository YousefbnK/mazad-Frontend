import React, { Component } from "react";
import AppContainer from "./navigation";

class App extends Component {
  render() {
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}

export default App;
