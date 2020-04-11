import React, { Component } from "react";
import { TouchableHighlight, Text, View } from "react-native";
import { Badge } from "native-base";
import { observer } from "mobx-react";

//Style
import styles from "./styles";
import authStore from "../../stores/authStore";

class RegisterationButton extends Component {
  handlelogin = () => {};

  handlelogout = () => {};

  render() {
    if (authStore.user) {
      return (
        <TouchableHighlight onPress={this.handlelogout}>
          <View>
            <Badge style={{ backgroundColor: "#FF4500" }}>
              <Text style={{ color: "white" }}>Log out</Text>
            </Badge>
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight onPress={this.handlelogin}>
          <View>
            <Badge style={{ backgroundColor: "#3CB371" }}>
              <Text style={{ color: "white" }}>Log in</Text>
            </Badge>
          </View>
        </TouchableHighlight>
      );
    }
  }
}

export default observer(RegisterationButton);
