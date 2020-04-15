import React, { Component } from "react";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";
import Video from "react-native-video";

//Styles
import styles from "./styles";
import { Text, View, ScrollView } from "react-native";
import { Shake } from "react-native-motion";

//Stores
import auctionStore from "../../stores/auctionStore";

//Buttons
import BidButton from "../Buttons/BidButton";

//Components
import NodeCamera from "../Stream/NodeCamera";
import VideoView from "../Stream/VideoView";
import authStore from "../../stores/authStore";
import socketStore from "../../stores/socketStore";

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

  render() {
    socketStore.fetchCurrentBid();
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
              initValue={this.state.currentBid}
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
