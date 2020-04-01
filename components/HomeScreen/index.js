import React, { Component } from "react";
import CountDown from "react-native-countdown-component";

//Style
import { View, Text, TouchableOpacity, FlatList } from "react-native";

//Data

//Components
import CategoriesList from "./CategoriesList";

class HomeScreen extends Component {
  state = {
    timerFinish: false
  };

  handlePress = () => {
    if (this.state.timerFinish) {
      alert("Tadaa");
    } else {
      alert("more patience required");
    }
  };
  render() {
    return (
      <View>
        {!this.state.timerFinish && (
          <Text>The next Auction is starting in: </Text>
        )}
        <CountDown
          until={1200000}
          onFinish={() => this.setState({ timerFinish: true })}
          onPress={() => alert("Hello")}
          size={20}
        />
        {this.state.timerFinish && (
          <TouchableOpacity onPress={this.handlePress}>
            <Text> Take me to the Auction !</Text>
          </TouchableOpacity>
        )}
        <CategoriesList />
      </View>
    );
  }
}

export default HomeScreen;
