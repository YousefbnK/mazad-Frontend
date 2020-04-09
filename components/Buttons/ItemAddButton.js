import React, { Component } from "react";

//Style
import { Icon, Button, View, Text } from "native-base";
import styles from "./styles";
import ItemAddModal from "../Modal/ItemAddModal";

class ItemAddButton extends Component {
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
      <View style={styles.addItemsView}>
        <ItemAddModal
          state={this.state.modalVisible}
          closeModal={this.closeModal}
        />
        <Button transparent onPress={this.openModal}>
          <Icon style={{ color: "grey" }} name="plus-square" type="Feather" />
          <Text style={styles.addItemsText}>Add Items</Text>
        </Button>
      </View>
    );
  }
}

export default ItemAddButton;
