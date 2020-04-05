import React, { Component } from "react";
import { observer } from "mobx-react";
import io from "socket.io-client";

//Styles
import styles from "./styles";
import { Text, View, Image, ScrollView, TextInput } from "react-native";
import { Shake } from "react-native-motion";

//Stores
import auctionStore from "../../stores/auctionStore";
import BidButton from "../Buttons/BidButton";

class BiddingScreen extends Component {
  state = {
    bid: 0,
    currentBid: 0,
    shake: true
  };

  socket = io.connect("http://127.0.0.1:8000");

  componentDidMount() {
    this.socket;
  }

  submitCurrentBid = bid => {
    this.socket.emit("Bid", bid);
    this.setState({ bid: 0 });
  };

  setTimeout = () => this.setState({ shake: !this.state.shake });

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
          <Shake value={this.state.shake} type="timing">
            <TextInput
              style={styles.textInput}
              value={this.state.bid}
              placeholder="Enter Bid... "
              onChangeText={bid => {
                this.setState({ bid });
              }}
              keyboardType={"numeric"}
            ></TextInput>
          </Shake>

          <BidButton
            bid={this.state.bid}
            submitBid={this.submitCurrentBid}
            currentBid={this.state.currentBid}
            shake={this.setTimeout}
          />
        </View>
      </ScrollView>
    );
  }
}

export default observer(BiddingScreen);
