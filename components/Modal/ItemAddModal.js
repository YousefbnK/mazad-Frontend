import React, { Component } from "react";
// import ImagePicker from "react-native-image-picker";
//  have to link it to nativ  => react-native link react-native-image-picker

//Stores
import auctionStore from "../../stores/auctionStore";

//Components
import ItemsCard from "./ItemsCard";

//Style
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton,
} from "react-native-modals";
import { View, TextInput, Button, ScrollView } from "react-native";
import styles from "./styles";

class ItemAddModal extends Component {
  state = {
    name: "",
    start_price: "",
    auction: this.props.auctionID,
    image: null,
    items: [],
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
    const toAddItems = { items: this.state.items };
    console.log("toAddItems", toAddItems);
    auctionStore.createItems(toAddItems);
    this.props.closeModal();
  };

  AddItem = () => {
    const state = this.state;
    const item = {
      name: state.name,
      start_price: state.start_price,
      auction: state.auction,
      image: state.image,
    };
    this.setState({
      items: state.items.concat([item]),
    });
  };

  removeItem = (index) => {
    const items = this.state.items.filter(
      (item) => item !== this.state.items[index]
    );
    this.setState({ items });
  };

  render() {
    const itemCard = this.state.items.map((item, index) => {
      return (
        <ItemsCard
          item={item}
          index={index}
          removeItem={() => this.removeItem(index)}
          key={item.name}
        />
      );
    });

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
                color="#grey"
                onPress={this.handleChoosePhoto}
              />
            </View>

            <View style={styles.fixToText}>
              <Button title="add Item" color="black" onPress={this.AddItem} />
            </View>

            <View style={{ height: 300 }}>
              <ScrollView>{itemCard}</ScrollView>
            </View>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default ItemAddModal;
