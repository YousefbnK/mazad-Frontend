import React, { Component } from "react";
import CountDown from "react-native-countdown-component";

//Style
import {
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View
} from "react-native";
import styles from "./styles";

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
      <ScrollView>
        {!this.state.timerFinish && (
          <Text style={styles.categoryTitle}>
            The next Auction is starting in:
          </Text>
        )}

        <CountDown
          style={{ marginTop: 30 }}
          digitStyle={{
            backgroundColor: "#FFF",
            borderWidth: 2,
            borderColor: "#1CC625"
          }}
          digitTxtStyle={{ color: "#1CC625" }}
          separatorStyle={{ color: "#1CC625" }}
          timeLabels={{ d: "days", h: "hours", m: "mins", s: "sec" }}
          showSeparator
          until={1200000}
          onFinish={() => this.setState({ timerFinish: true })}
          onPress={() => alert("Hello")}
          size={30}
        />

        {this.state.timerFinish && (
          <TouchableOpacity onPress={this.handlePress}>
            <Text style={styles.categoryTitle}> Take me to the Auction !</Text>
          </TouchableOpacity>
        )}

        <CategoriesList navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Home",
  headerRight: <Text>Hii</Text>
};

export default HomeScreen;
