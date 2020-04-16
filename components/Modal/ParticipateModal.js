import React, { Component } from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";

//Stores
import auctionStore from "../../stores/auctionStore";

//Style
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton,
} from "react-native-modals";
import { View, Text } from "react-native";
import styles from "./styles";

class AddAuctionModal extends Component {
  state = {
    auction: "",
    bidder: "",
    amount: 1,
  };

  submiAuctionCharg = () => {
    const chargObj = {
      auction: 1,
      bidder: 1,
      status: true,
      amount: this.state.amount,
    };
    console.log("Whaaa", this.state.auctionStart);
    console.log(auctionStore.verifiedUser);
    auctionStore.submiAuctionCharg(chargObj);
    this.props.closeModal();
    console.log(auctionStore.verifiedUser);
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
            <Text style={styles.paymentText}>
              Please pay the deposit to start bidding
            </Text>
            <Text style={styles.paymentText}>
              Amount: {this.state.amount} KD
            </Text>
            <View style={styles.inputContainer}>
              <LiteCreditCardInput />
            </View>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default AddAuctionModal;
