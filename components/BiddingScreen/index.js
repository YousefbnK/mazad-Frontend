import React, { Component } from "react";
import { observer } from "mobx-react";
import io from "socket.io-client";

//Styles
import styles from "./styles";
import { Text, View, Image, ScrollView, TextInput } from "react-native";

//Stores
import auctionStore from "../../stores/auctionStore";
import BidButton from "../Buttons/BidButton";

class BiddingScreen extends Component {
  state = {
    bid: 0,
    currentBid: 0
  };

  socket = io.connect("http://127.0.0.1:3000");

  componentDidMount() {
    this.socket;
  }

  submitCurrentBid = bid => {
    this.socket.emit("Bid", bid);
    this.setState({ bid: 0 });
  };

  render() {
    this.socket.on("Bid", bid => {
      this.setState({ currentBid: bid });
    });
    return (
      <ScrollView>
        <View>
          <Image
            style={styles.image}
            source={{ uri: `${auctionStore.auctionItem[0].image}` }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.initialPrice}>
            Starting bid: {auctionStore.auctionItem[0].startBid} KD
          </Text>
          <Text style={styles.currentBid}>
            Current bid: {this.state.currentBid} KD
          </Text>
          <Text style={styles.description}>
            {auctionStore.auctionItem[0].description}
          </Text>
          <TextInput
            style={styles.textInput}
            value={this.state.bid}
            placeholder="Enter Bid... "
            onChangeText={bid => {
              this.setState({ bid });
            }}
            keyboardType={"numeric"}
          />
          <BidButton
            bid={this.state.bid}
            submitBid={this.submitCurrentBid}
            currentBid={this.state.currentBid}
          />
        </View>
      </ScrollView>
    );
  }
}

export default observer(BiddingScreen);
