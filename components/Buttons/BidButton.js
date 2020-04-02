import React from "react";
import { TouchableHighlight, Text, View } from "react-native";

//Style
import styles from "./styles";
import auctionStore from "../../stores/auctionStore";
import { observer } from "mobx-react";

const BidButton = props => {
  const submitBid = () => {
    if (
      props.bid >= auctionStore.auctionItem[0].startBid &&
      props.bid > props.currentBid
    ) {
      props.submitBid(props.bid);
    } else {
      alert("raise your bid");
    }
  };
  return (
    <TouchableHighlight underlayColor="#49b64d" onPress={submitBid}>
      <View style={styles.container}>
        <Text style={styles.text}>Bid</Text>
      </View>
    </TouchableHighlight>
  );
};

export default observer(BidButton);
