import React from "react";

//Styles
import styles from "./styles";
import { View } from "react-native";
import { Icon } from "react-native-elements";

const BaseIcon = ({ containerStyle, icon }) => {
  return (
    <View style={[styles.iconContainer, containerStyle]}>
      <Icon
        size={24}
        color="white"
        type="material"
        name="notifications"
        {...icon}
      />
    </View>
  );
};

export default BaseIcon;
