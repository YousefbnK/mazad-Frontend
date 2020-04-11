import React, { Component } from "react";
import { observer } from "mobx-react";
import io from "socket.io-client";
import NumericInput from "react-native-numeric-input";
import { LivePlayer } from "react-native-live-stream";

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
    shake: true,
  };

  socket = io.connect("http://127.0.0.1:8001");

  componentDidMount() {
    this.socket;
  }

  submitCurrentBid = (bid) => {
    this.socket.emit("Bid", bid);
    this.setState({ bid: this.state.currentBid });
  };

  setTimeout = () => this.setState({ shake: !this.state.shake });

  render() {
    this.socket.on("Bid", (bid) => {
      this.setState({ currentBid: bid });
    });
    return (
      <ScrollView>
        <View>
          <LivePlayer
            style={styles.image}
            source={{
              uri:
                "rtmp://live.mux.com/app/1c26beba-471e-42a2-132f-e33b53dd4978",
            }}
            ref={(ref) => {
              this.player = ref;
            }}
            style={styles.video}
            paused={false}
            muted={false}
            bufferTime={300}
            maxBufferTime={1000}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.info}>
          {this.state.currentBid < 1 && (
            <Text style={styles.initialPrice}>
              Starting bid: {auctionStore.auctionItem[0].startBid} KD
            </Text>
          )}
          <Text style={styles.currentBid}>
            Current bid: {this.state.currentBid} KD
          </Text>
          <Text style={styles.description}>
            {auctionStore.auctionItem[0].description}
          </Text>
          <View style={styles.textInput}>
            <Shake value={this.state.shake} type="timing">
              <NumericInput
                type={"up-down"}
                style={{ borderWidth: 2 }}
                minValue={auctionStore.auctionItem[0].startBid}
                initValue={auctionStore.auctionItem[0].startBid}
                rounded={true}
                reachMinIncIconStyle={{ marginTop: 15 }}
                reachMinDecIconStyle={{ color: "white" }}
                step={auctionStore.auctionItem[0].startBid / 10}
                onChange={(bid) => {
                  this.setState({ bid });
                }}
              />
            </Shake>
          </View>

          <BidButton
            bid={this.state.bid}
            submitBid={this.submitCurrentBid}
            currentBid={this.state.currentBid}
            shake={this.setTimeout}
            navigation={this.props.navigation}
          />
        </View>
      </ScrollView>
    );
  }
}

BiddingScreen.navigationOptions = {
  headerTransparent: "true",
  swipeEnabled: false,
  headerLeft: null,
};

export default observer(BiddingScreen);
