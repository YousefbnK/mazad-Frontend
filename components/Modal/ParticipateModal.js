import React, { Component } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//Stores
import auctionStore from "../../stores/auctionStore";

//Style
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton,
} from "react-native-modals";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

class AddAuctionModal extends Component {
  state = {
    auction: "",
    bidder: "",
    amount: "",
  };

  submiAuctionCharg = () => {
    const chargObj = {
      auction: 1,
      bidder: 1,
      status: true,
      amount: 10,
    };
    auctionStore.submiAuctionCharg(chargObj);
    this.props.closeModal();
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
              <ModalButton text="PAY" onPress={this.submiAuctionCharg} />
            </ModalFooter>
          }
        >
          <ModalContent>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Name on Card"
                onChangeText={(val) => this.setState({ val })}
              />
            </View>

            <View style={styles.desContainer}>
              <TextInput
                style={styles.desInputs}
                placeholder="Card number"
                underlineColorAndroid="transparent"
                onChangeText={(val) => this.setState({ val })}
              />
            </View>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default AddAuctionModal;
