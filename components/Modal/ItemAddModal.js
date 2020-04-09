import React, { Component } from "react";

//Style
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton
} from "react-native-modals";
import { View, TextInput, Button, Text } from "react-native";
import styles from "./styles";

class ItemAddModal extends Component {
  state = {
    name: "",
    startPrice: "",
    auction: "",
    image: ""
  };

  submitAuction = () => {};

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
                onChangeText={name => this.setState({ name })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="startPrice"
                onChangeText={startPrice => this.setState({ startPrice })}
              />
            </View>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default ItemAddModal;
