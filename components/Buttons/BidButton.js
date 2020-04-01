import React from "react";
import { TouchableHighlight, Text, View } from "react-native";

//Style
import styles from "./styles";
import auctionStore from "../../stores/auctionStore";
import { observer } from "mobx-react";

const BidButton = props => {
  const submitBid = () => {
    if (props.bid >= props.startBid && props.bid >= props.currentBid) {
      props.submitBid(props.bid);
    } else {
      alert("booo");
    }
  };
  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={submitBid}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bid</Text>
      </View>
    </TouchableHighlight>
  );
};

export default observer(BidButton);
