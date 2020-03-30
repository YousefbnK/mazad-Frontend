import React, { Component } from "react";
import CountDown from "react-native-countdown-component";

//Style
import { View, Text, TouchableOpacity } from "react-native";

//Data
import categories from "../../categoriesData";

//Components
import CategoriesList from "../Categories";

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
    const items = categories.map(item => item.name);
    return (
      <View>
        {!this.state.timerFinish && (
          <Text>The next Auction is starting in: </Text>
        )}
        <CountDown
          until={5}
          onFinish={() => this.setState({ timerFinish: true })}
          onPress={() => alert("Hello")}
          size={20}
        />
        {this.state.timerFinish && (
          <TouchableOpacity onPress={this.handlePress}>
            <Text> Take me to the Auction !</Text>
          </TouchableOpacity>
        )}
        <CategoriesList items={items} />
      </View>
    );
  }
}

export default HomeScreen;
