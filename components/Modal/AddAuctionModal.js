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
    datePickerVisible: false,
    displayDate: new Date().toLocaleString(),
    title: "",
    description: "",
    start_date: new Date().toISOString(),
    category: "",
  };

  showDatePicker = () => {
    this.setState({ datePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ datePickerVisible: false });
  };

  handleConfirmDate = (date) => {
    this.setState({ start_date: date.toISOString() });
    this.setState({ displayDate: date.toLocaleString() });
    this.hideDatePicker();
  };

  submitAuction = () => {
    const auctionObj = {
      title: this.state.title,
      description: this.state.description,
      start_date: this.state.start_date,
      category: auctionStore.catObj.id,
    };
    auctionStore.createAuctions(auctionObj);
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
              <ModalButton text="SUBMIT" onPress={this.submitAuction} />
            </ModalFooter>
          }
        >
          <ModalContent>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="title"
                onChangeText={(title) => this.setState({ title })}
              />
            </View>
            <TouchableOpacity onPress={this.showDatePicker}>
              <View style={styles.inputContainer}>
                <Text style={{ marginLeft: 16, fontSize: 16 }}>
                  {this.state.displayDate}
                </Text>
                <DateTimePickerModal
                  headerTextIOS="Select date & time"
                  isVisible={this.state.datePickerVisible}
                  mode="datetime"
                  onConfirm={this.handleConfirmDate}
                  onCancel={this.hideDatePicker}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.desContainer}>
              <TextInput
                style={styles.desInputs}
                placeholder="description"
                multiline={true}
                underlineColorAndroid="transparent"
                onChangeText={(description) => this.setState({ description })}
              />
            </View>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default AddAuctionModal;
