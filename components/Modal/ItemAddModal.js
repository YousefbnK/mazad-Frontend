import React, { Component } from "react";
// import ImagePicker from "react-native-image-picker";
//  have to link it to nativ react-native link react-native-image-picker

//Stores
import auctionStore from "../../stores/auctionStore";

//Style
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton,
} from "react-native-modals";
import { View, TextInput, Button, Text } from "react-native";
import styles from "./styles";

class ItemAddModal extends Component {
  state = {
    name: "",
    start_price: "",
    auction: this.props.auctionID,
    image: null,
  };

  handleChoosePhoto = () => {
    // const options = {
    //   // noData=true
    // };
    // ImagePicker.launchImageLibrary(options, (response) => {
    //   this.state.image = response;
    // });
  };

  submitAuction = () => {
    const items = [this.state];
    const submit = { items: items };
    auctionStore.createItems(submit);
  };

  render() {
    return (
      <View>
        <Modal
          visible={this.props.state}
          onTouchOutside={() => {
            this.props.closeModal();
          }}
          footer={
            <ModalFooter>
              <ModalButton text="CANCEL" onPress={this.props.closeModal} />
              <ModalButton text="SUBMIT" onPress={this.submitAuction} />
            </ModalFooter>
          }
        >
          <ModalContent>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="name"
                onChangeText={(name) => this.setState({ name })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="start_price"
                onChangeText={(start_price) => this.setState({ start_price })}
              />
            </View>

            <View style={styles.inputContainer}>
              <Button
                title="Choose Photo"
                color="#1CC625"
                onPress={this.handleChoosePhoto}
              />
            </View>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default ItemAddModal;
