import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

//Style
import styles from "./styles";
import auctionStore from "../../stores/auctionStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

const BidButton = (props) => {
  const submitBid = () => {
    if (authStore.user) {
      if (
        props.bid >= auctionStore.auctionItem[0].startBid &&
        props.bid > props.currentBid
      ) {
        props.submitBid(props.bid);
      } else {
        props.shake();
      }
    } else {
      props.navigation.navigate("Profile");
    }
  };
  return (
    <TouchableOpacity onPress={submitBid}>
      <View style={authStore.user ? styles.container : styles.containerAnon}>
        <Text style={styles.text}>Bid</Text>
      </View>
    </TouchableOpacity>
  );
};

export default observer(BidButton);
