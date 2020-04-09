import React, { Component } from "react";

//Style
import { Icon, Button, View } from "native-base";
import AddAuctionModal from "../Modal/AddAuctionModal";

class AddAuctionButton extends Component {
  state = {
    modalVisible: false
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
        <AddAuctionModal
          state={this.state.modalVisible}
          closeModal={this.closeModal}
        />
        <Button transparent onPress={this.openModal}>
          <Icon style={{ color: "#1CC625" }} name="plus" type="Octicons" />
        </Button>
      </View>
    );
  }
}

export default AddAuctionButton;
