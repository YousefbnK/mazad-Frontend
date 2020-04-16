import React, { Component } from "react";
import { observer } from "mobx-react";

//Style
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";

//Stores
import authStore from "../../stores/authStore";

//Style
import ParticipateModal from "../Modal/ParticipateModal";

class ParticipateButton extends Component {
  state = {
    modalVisible: false,
  };

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <View>
        <ParticipateModal
          state={this.state.modalVisible}
          closeModal={this.closeModal}
        />

        <TouchableOpacity onPress={this.openModal}>
          <View
            style={authStore.user ? styles.container : styles.containerAnon}
          >
            <Text style={styles.text}>Participate</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ParticipateButton;
