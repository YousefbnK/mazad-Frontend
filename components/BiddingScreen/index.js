import React, { Component } from "react";
import { observer } from "mobx-react";
import io from "socket.io-client";
import NumericInput from "react-native-numeric-input";

//Styles
import styles from "./styles";
import { Text, View, ScrollView } from "react-native";
import { Shake } from "react-native-motion";

//Stores
import auctionStore from "../../stores/auctionStore";

//Buttons
import BidButton from "../Buttons/BidButton";

//Components
import NodeCamera from "../Stream/NodeCameraView";
import VideoView from "../Stream/VideoView";
import authStore from "../../stores/authStore";

class BiddingScreen extends Component {
  state = {
    bid: 0,
    currentBid: 0,
    shake: true,
    auctionStart: false,
  };

  socket = io.connect("http://178.128.207.229:8000");

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
        {this.state.auctionStart ? (
          <View style={styles.nodeCameraView}>
            {authStore.is_vender ? <NodeCamera /> : <VideoView />}
          </View>
        ) : (
          <View style={styles.videoTextView}>
            <Text style={styles.liveStreamText}>
              Live Stream is Unavailable
            </Text>
          </View>
        )}

        <View style={styles.info}>
          {this.state.currentBid < 1 ? (
            <Text style={styles.initialPrice}>
              Starting bid: {auctionStore.auctionItem[0].startBid} KD
            </Text>
          ) : (
            <Text style={styles.currentBid}>
              Current bid: {this.state.currentBid} KD
            </Text>
          )}
        </View>
        <View style={styles.buttonView}>
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
  gesturesEnabled: false,
  headerLeft: null,
};

export default observer(BiddingScreen);
