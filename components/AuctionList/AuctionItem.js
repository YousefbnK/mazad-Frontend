import React, { Component } from "react";
import CountDown from "react-native-countdown-component";

//Styles
import { Text, View, TouchableOpacity, Button, Icon } from "react-native";
import styles from "./styles";
import ItemAddButton from "../Buttons/ItemAddButton";

class AuctionItem extends Component {
  state = {
    auctionStart: false,
    auctionID: this.props.item.id,
    venderID: this.props.item.user,
  };

  startAuction = () => {
    if (this.state.auctionStart) {
      this.props.navigation.navigate("BiddingScreen");
    }
  };

  startTime = () => {
    const now = +new Date();
    const date = +new Date(this.props.item.start_date);
    const diff = date - now;
    const seconds = diff / 1000;
    return seconds;
  };

  render() {
    return (
      <TouchableOpacity onPress={this.startAuction}>
        <View
          style={
            this.state.auctionStart
              ? styles.auctionContainerStart
              : styles.auctionContainer
          }
        >
          <Text style={styles.auctionName}>{this.props.item.title}</Text>

          <View style={styles.countDownView}>
            <CountDown
              style={styles.countDownTimer}
              until={this.startTime()}
              onFinish={() => this.setState({ auctionStart: true })}
              size={15}
              digitStyle={{ backgroundColor: "#FFF" }}
              digitTxtStyle={{ color: "#1CC625" }}
            />
          </View>

          <ItemAddButton
            auctionID={this.state.auctionID}
            venderID={this.state.venderID}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default AuctionItem;
