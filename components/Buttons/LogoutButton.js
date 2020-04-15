import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Style
import authStore from "../../stores/authStore";
import styles from "./styles";

class LogoutButton extends Component {
  handlelogout = () => {
    authStore.logout();
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlelogout}>
        <View style={styles.logout}>
          <Text style={{ fontSize: 16, textAlign: "center", margin: 20 }}>
            LOG OUT
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(observer(LogoutButton));
