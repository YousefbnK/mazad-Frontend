import React from "react";
import CountDown from "react-native-countdown-component";

//Styles
import { Text, View } from "react-native";
import styles from "./styles";

const AuctionItem = props => {
  return (
    <View style={styles.auctionContainer}>
      <Text style={styles.auctionName}>{props.item.name}</Text>

      <CountDown
        style={styles.countDownTimer}
        until={props.item.startTime}
        // onFinish={() => alert("finished")}
        // onPress={() => alert("hello")}
        size={15}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "#1CC625" }}
      />
    </View>
  );
};

export default AuctionItem;
