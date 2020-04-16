import React, { Component } from "react";
import { observer } from "mobx-react";

//Styles
import styles from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Shake } from "react-native-motion";

//Stores
import auctionStore from "../../stores/auctionStore";

//Buttons
import BidButton from "../Buttons/BidButton";
import ParticipateButton from "../Buttons/ParticipateButton";

//Components
import NodeCamera from "../Stream/NodeCamera";
import VideoView from "../Stream/VideoView";
import authStore from "../../stores/authStore";
import socketStore from "../../stores/socketStore";
import Badges from "./Bages";
import AuctionStartButton from "../Buttons/AuctionStartButton";

class BiddingScreen extends Component {
  state = {
    bid: 0,
    currentBid: socketStore.currentBid,
    shake: true,
    auctionStart: false,
  };

  componentDidMount() {
    socketStore.socket;
  }

  submitCurrentBid = (bid) => {
    socketStore.submitBid(bid);
  };

  setTimeout = () => this.setState({ shake: !this.state.shake });

  handleadd = (value) => {
    let newValue = this.state.bid + value;
    this.setState({ bid: newValue });
  };

  startAuction = () => {
    this.setState({ auctionStart: true });
    socketStore.socket.emit("Start Auction", !this.state.auctionStart);
  };

  stopAuction = () => {
    this.setState({ auctionStart: false });
    socketStore.socket.emit("Stop Auction", !this.state.auctionStart);
    alert("The auction is over thank you for participating");
    !authStore.is_vender && this.props.navigation.navigate("AuctionListLive");
  };

  render() {
    socketStore.socket.on("Bid", (bid) => {
      this.setState({ currentBid: bid });
    });
    socketStore.socket.on("Start Auction", (start) => {
      this.setState({ auctionStart: start });
    });
    socketStore.socket.on("Stop Auction", (stop) => {
      this.setState({ auctionStart: stop });
    });

    console.log("Whaaa", this.state.auctionStart);

    return (
      <View>
        {this.state.auctionStart ? (
          <View style={styles.videoTextView}>
            {authStore.is_vender ? <NodeCamera /> : <VideoView />}
          </View>
        ) : (
          <View style={styles.videoTextView}>
            <Text style={styles.liveStreamText}>
              Live Stream is Unavailable
            </Text>
          </View>
        )}
        <View style={styles.textsection}>
          {this.state.currentBid < 1 ? (
            <Text style={styles.bidText}>
              Starting bid: {auctionStore.auctionItem[0].startBid} KD
            </Text>
          ) : (
            <Text style={styles.bidText}>
              Current bid: {this.state.currentBid} KD
            </Text>
          )}
        </View>

        {!authStore.is_vender ? (
          <View style={styles.biddingsection}>
            {/* <View style={styles.buttonView}>  was removed top*/}

            <Shake value={this.state.shake} type="timing">
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                textAlign="center"
                defaultValue={`${this.state.bid}`}
                onChangeText={(bid) => {
                  this.setState({ bid });
                }}
              />
            </Shake>

            {this.state.auctionStart ? (
              authStore.verifiedUser ? (
                <BidButton
                  onPress
                  bid={this.state.bid}
                  submitBid={this.submitCurrentBid}
                  currentBid={this.state.currentBid}
                  shake={this.setTimeout}
                  navigation={this.props.navigation}
                />
              ) : (
                <ParticipateButton />
              )
            ) : (
              <Text style={styles.pleaseWait}>
                Please wait for auction to start
              </Text>
            )}
          </View>
        ) : (
          <AuctionStartButton
            state={this.state.auctionStart}
            startAuction={this.startAuction}
            stopAuction={this.stopAuction}
          />
        )}
        {!authStore.is_vender && <Badges handleadd={this.handleadd} />}
      </View>
    );
  }
}

BiddingScreen.navigationOptions = {
  headerTransparent: "true",
  swipeEnabled: false,
  gesturesEnabled: false,
  // headerLeft: null,
};

export default observer(BiddingScreen);
