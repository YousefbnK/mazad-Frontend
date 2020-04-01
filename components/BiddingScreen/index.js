import React, { Component } from "react";
import { observer } from "mobx-react";

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

  onChangeText = num => this.setState({ bid: num });

  submitCurrentBid = bid => this.setState({ currentBid: bid });

  render() {
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
            placeholder="Enter Bid... "
            onChangeText={this.onChangeText}
            keyboardType={"numeric"}
          />
          <BidButton
            bid={this.state.bid}
            currentBid={this.state.currentBid}
            submitBid={this.submitCurrentBid}
            startBid={auctionStore.auctionItem[0].startBid}
          />
        </View>
      </ScrollView>
    );
  }
}

export default observer(BiddingScreen);
