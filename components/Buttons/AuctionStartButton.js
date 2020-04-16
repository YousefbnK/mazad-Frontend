import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

//Style
import styles from "./styles";

const AuctionStartButton = (props) => {
  if (props.state) {
    return (
      <TouchableOpacity onPress={props.stopAuction}>
        <View style={styles.containerStop}>
          <Text style={styles.text}>Stop Auction</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.startAuction}>
        <View style={styles.container}>
          <Text style={styles.text}>Start Auction</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default AuctionStartButton;
