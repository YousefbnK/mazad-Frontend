import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

//Style
import authStore from "../../stores/authStore";

class LogoutButton extends Component {
  handlelogout = () => {
    authStore.logout();
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlelogout}>
        <Text style={{ marginEnd: 15, fontSize: 18, color: "#0080ff" }}>
          Log out
        </Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(observer(LogoutButton));
