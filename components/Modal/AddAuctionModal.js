import React, { Component } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    timePickerModal: false,
    displayDate: new Date().toLocaleString(),
    // time: new Date().toLocaleTimeString("en-GB", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // }),
    title: "",
    description: "",
    start_date: "",
    vender: "",
    category: "",
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

  handleConfirmDate = (date) => {
    this.setState({ start_date: date.toISOString() });
    this.setState({ displayDate: date.toLocaleString() });
    this.hideDatePicker();
  };

  // handleConfirmTime = (time) => {
  //   this.setState({ time: time });
  //   this.hideTimePicker();
  // };

  submitAuction = () => {
    state = this.state;
    AuctionObj = {
      title: this.state.title,
      description: this.state.description,
      start_date: this.state.start_date,
      category: 1,
    };
    console.log(AuctionObj);
  };

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
            {/* <TouchableOpacity onPress={this.showTimePicker}>
              <View style={styles.inputContainer}>
                <Text style={{ marginLeft: 16, fontSize: 16 }}>
                  {this.state.time}
                </Text>
                <DateTimePickerModal
                  headerTextIOS="Select time"
                  isVisible={this.state.timePickerVisible}
                  mode="time"
                  locale="en_GB"
                  onConfirm={this.handleConfirmTime}
                  onCancel={this.hideTimePicker}
                />
              </View>
            </TouchableOpacity> */}
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
