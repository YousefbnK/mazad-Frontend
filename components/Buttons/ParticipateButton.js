import React, { Component } from "react";
import { observer } from "mobx-react";

//Stores
import authStore from "../../stores/authStore";

//Style
import { Icon, Button, View } from "native-base";
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
    if (authStore.is_vender) {
      return (
        <View>
          <ParticipateModal
            state={this.state.modalVisible}
            closeModal={this.closeModal}
          />

          <Button
            transparent
            style={styles.containerAnon}
            onPress={this.openModal}
          >
            <Tex> Start Bidding !</Tex>
          </Button>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default observer(ParticipateButton);
