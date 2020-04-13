import React, { Component } from "react";

//Stores
import authStore from "../../stores/authStore";

//Style
import { Icon, Button, View, Text } from "native-base";
import styles from "./styles";
import ItemAddModal from "../Modal/ItemAddModal";

class ItemAddButton extends Component {
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
    console.log(this.props.venderID, authStore.userID);

    //  if for permissions (is_vender & is_vender owner)
    if (authStore.is_vender && this.props.venderID === authStore.userID) {
      return (
        <View style={styles.addItemsView}>
          <ItemAddModal
            state={this.state.modalVisible}
            closeModal={this.closeModal}
            auctionID={this.props.auctionID}
          />
          <Button transparent onPress={this.openModal}>
            <Icon
              style={{ color: "#1CC625" }}
              name="plus-square"
              type="Feather"
            />
            <Text style={styles.addItemsText}>Add Items</Text>
          </Button>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default ItemAddButton;
