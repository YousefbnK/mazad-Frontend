import React, { Component } from "react";
import { Spinner } from "native-base";
import CountDown from "react-native-countdown-component";
import { observer } from "mobx-react";

//Style
import {
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import styles from "./styles";

//Stores
import auctionStore from "../../stores/auctionStore";

//Components
import CategoriesList from "./CategoriesList";
import RegisterationButton from "../Buttons/RegisterationButton";

class HomeScreen extends Component {
  state = {
    timerFinish: false,
  };

  handlePress = () => {
    if (this.state.timerFinish) {
      alert("Tadaa");
    } else {
      alert("more patience required");
    }
  };

  startTime = () => {
    const now = +new Date();
    const date = +new Date(auctionStore.auctions[0].start_date);
    const diff = date - now;
    const seconds = diff / 1000;
    return seconds;
  };

  render() {
    if (auctionStore.loadingAuc) {
      return <Spinner />;
    } else {
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
              borderColor: "#3CB371",
            }}
            digitTxtStyle={{ color: "#3CB371" }}
            separatorStyle={{ color: "#3CB371" }}
            until={this.startTime()}
            onFinish={() => this.setState({ timerFinish: true })}
            onPress={() => this.props.navigation.navigate("AuctionList")}
            size={30}
          />

          {this.state.timerFinish && (
            <TouchableOpacity onPress={this.handlePress}>
              <Text style={styles.categoryTitle}>
                {" "}
                Take me to the Auction !
              </Text>
            </TouchableOpacity>
          )}

          <CategoriesList navigation={this.props.navigation} />
        </ScrollView>
      );
    }
  }
}

HomeScreen.navigationOptions = {
  title: "Home",
};

export default observer(HomeScreen);
