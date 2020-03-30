import React, { Component } from "react";
import CountDown from "react-native-countdown-component";

//Data
import categories from "../../categoriesData";
import { View } from "react-native";

//Components
import CategoriesList from "../Categories";

class HomeScreen extends Component {
  render() {
    const items = categories.map(item => item.name);
    return (
      <View>
        <CountDown
          until={10}
          onFinish={() => alert("Tada")}
          onPress={() => alert("Hello")}
          size={20}
        />
        <CategoriesList items={items} />
      </View>
    );
  }
}

export default HomeScreen;
