import React, { Component } from "react";

import styles from "./styles";
import { Button, Text } from "native-base";

import Modal, { ModalTitle, ModalContent } from "react-native-modals";
import { observer } from "mobx-react";

import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import authStore from "../../stores/authStore";

class LoginModal extends Component {
  state = {
    login: true,
    status: this.props.state,
  };

  register = () => {
    this.setState({ login: false });
  };

  login = () => {
    this.setState({ login: true });
  };

  handleClose = () => {
    this.setState({ status: false });
  };

  render() {
    authStore.user && this.handleClose;
    return (
      <>
        <Button
          full
          danger
          onPress={() => {
            this.setState({ status: true });
          }}
        >
          <Text>Checkout</Text>
        </Button>

        <Modal.BottomModal
          visible={this.state.status}
          onTouchOutside={() => this.setState({ status: false })}
          height={0.75}
          width={1}
          modalTitle={
            <ModalTitle
              title={this.state.login ? "Log in" : "Register"}
              hasTitleBar
            />
          }
        >
          <ModalContent
            style={{
              flex: 1,
              backgroundColor: "fff",
            }}
          >
            {this.state.login ? (
              <Login register={this.register} handleClose={this.handleClose} />
            ) : (
              <Register login={this.login} handleClose={this.handleClose} />
            )}
          </ModalContent>
        </Modal.BottomModal>
      </>
    );
  }
}

export default observer(LoginModal);
