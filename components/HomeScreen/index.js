import React, { Component } from "react";
import CountDown from "react-native-countdown-component";

class HomeScreen extends Component {
  render() {
    return (
      <CountDown
        until={10}
        onFinish={() => alert("Tada")}
        onPress={() => alert("Hello")}
        size={20}
      />
    );
  }
}

export default HomeScreen;
