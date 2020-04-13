import React from "react";

//Styles
import styles from "./styles";
import { Text, View } from "react-native";

const InfoText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};

export default InfoText;
