import React, { Component } from "react";
import { observer } from "mobx-react";
import { Badge } from "native-base";
import io from "socket.io-client";
import Badges from "./Bages";

//Styles
import styles from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
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
    auctionStart: socketStore,
  };

  componentDidMount() {
    socketStore.socket;
  }

  submitStart = () => socketStore.submitStart("true");
  submitStop = () => socketStore.submitStart("false");

  submitCurrentBid = (bid) => {
    socketStore.submitBid(bid);
  };

  setTimeout = () => this.setState({ shake: !this.state.shake });

  handleadd = (value) => {
    let newValue = this.state.bid + value;
    this.setState({ bid: newValue });
  };

  render() {
    socketStore.socket.on("Bid", (bid) => {
      this.setState({ currentBid: bid });
    });

    socketStore.socket.on("start", (start) => {
      this.setState({ auctionStart: !this.state.auctionStart });
    });
    return (
      <View>
        <View style={styles.camra}>
          {this.state.auctionStart ? (
            <View>
              {/* style={styles.nodeCameraView} war rem top */}
              <View style={styles.videoTextView}>
                {authStore.is_vender ? <NodeCamera /> : <VideoView />}
                <TouchableOpacity onPress={this.submitStop}>
                  <Text>Stop</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              {/* <View style={styles.videoTextView}>  was rm top*/}

              <Text style={styles.liveStreamText}>
                Live Stream is Unavailable
              </Text>
              <TouchableOpacity onPress={this.submitStart}>
                <Text>START</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

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

          <BidButton
            onPress
            bid={this.state.bid}
            submitBid={this.submitCurrentBid}
            currentBid={this.state.currentBid}
            shake={this.setTimeout}
            navigation={this.props.navigation}
          />
        </View>

        <Badges handleadd={this.handleadd} />
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
