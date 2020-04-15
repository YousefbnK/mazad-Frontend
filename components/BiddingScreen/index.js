import React, { Component } from "react";
import { observer } from "mobx-react";
import io from "socket.io-client";
import { Badge } from "native-base";


//Styles
import styles from "./styles";
import { Text, View, TextInput, TouchableHighlight } from "react-native";
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

  handleadd = (value) => {
    let newValue = this.state.userbid + value;
    this.setState({ userbid: newValue });
    console.log("bid", this.state.userbid);
  };

  render() {
    socketStore.fetchCurrentBid();
    return (
      <View>
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
            <TextInput
              style={styles.container}
              keyboardType="numeric"
              textAlign="center"
              defaultValue={`${this.state.userbid}`}
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

          <View style={styles.badge}>
            <TouchableHighlight onPress={() => this.handleadd(5)}>
              <View style={{ padding: 4 }}>
                <Badge
                  style={{
                    backgroundColor: "#2cd18a",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>+5 kd</Text>
                </Badge>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.handleadd(10)}>
              <View style={{ padding: 4 }}>
                <Badge
                  style={{
                    backgroundColor: "#28bd7d",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>+10 kd</Text>
                </Badge>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.handleadd(50)}>
              <View style={{ padding: 4 }}>
                <Badge
                  style={{
                    backgroundColor: "#24ad73",

                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>+50 kd</Text>
                </Badge>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

BiddingScreen.navigationOptions = {
  headerTransparent: "true",
  // swipeEnabled: false,
  // gesturesEnabled: false,
  // headerLeft: null,
};

export default observer(BiddingScreen);
