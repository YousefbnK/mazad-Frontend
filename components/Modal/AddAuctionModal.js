import React, { Component } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//Style
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton
} from "react-native-modals";
import { View, TextInput, Button, Text } from "react-native";
import styles from "./styles";

class AddAuctionModal extends Component {
  state = {
    datePickerVisible: false,
    timePickerModal: false,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    }),
    title: "",
    description: "",
    vender: "",
    category: ""
  };

  showDatePicker = () => {
    this.setState({ datePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ datePickerVisible: false });
  };

  showTimePicker = () => {
    this.setState({ timePickerVisible: true });
  };

  hideTimePicker = () => {
    this.setState({ timePickerVisible: false });
  };

  handleConfirmDate = date => {
    this.setState({ date: date });
    this.hideDatePicker();
  };

  handleConfirmTime = time => {
    this.setState({ time: time });
    this.hideTimePicker();
  };

  submitAuction = () => {};

  render() {
    console.log("PROPS", this.props.state);
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
                onChangeText={title => this.setState({ title })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Button
                title={`${this.state.date}`}
                onPress={this.showDatePicker}
              ></Button>
              <DateTimePickerModal
                isVisible={this.state.datePickerVisible}
                mode="date"
                onConfirm={this.handleConfirmDate}
                onCancel={this.hideDatePicker}
              />
            </View>
            <View style={styles.inputContainer}>
              <Button
                title={`${this.state.time}`}
                onPress={this.showTimePicker}
              ></Button>
              <DateTimePickerModal
                headerTextIOS="Select time"
                isVisible={this.state.timePickerVisible}
                mode="time"
                locale="en_GB"
                onConfirm={this.handleConfirmTime}
                onCancel={this.hideTimePicker}
              />
            </View>
            <View style={styles.desContainer}>
              <TextInput
                style={styles.desInputs}
                placeholder="description"
                multiline={true}
                underlineColorAndroid="transparent"
                onChangeText={description => this.setState({ description })}
              />
            </View>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default AddAuctionModal;
