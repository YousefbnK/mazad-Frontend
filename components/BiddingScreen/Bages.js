import React, { Component } from "react";
import { Badge } from "native-base";

//Styles
import styles from "./styles";
import { Text, View, TouchableOpacity } from "react-native";

const Bages = (props) => {
  return (
    <View style={styles.badge}>
      <TouchableOpacity onPress={() => props.handleadd(5)}>
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
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleadd(10)}>
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
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.handleadd(50)}>
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
      </TouchableOpacity>
    </View>
  );
};
export default Bages;
