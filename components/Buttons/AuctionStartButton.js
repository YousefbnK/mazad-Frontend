import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

//Style
import styles from "./styles";
import socketStore from "../../stores/socketStore";
import { observer } from "mobx-react";

const AuctionStartButton = (props) => {
  if (socketStore.auctionStart) {
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

export default observer(AuctionStartButton);
