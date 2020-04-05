import React, { Component } from "react";

//Styles
import styles from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import DropdownMenu from "react-native-dropdown-menu";

//Stores
import authStore from "../../stores/authStore";

class Register extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    status: ""
  };

  handlePress = () => this.props.navigation.navigate("Login");

  submitRegister = () => authStore.register(this.state);

  render() {
    const status = [["Personal", "Vendor"]];
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Full name"
            onChangeText={fullName => this.setState({ fullName })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </View>

        {/* <View style={styles.inputContainer}>
          <DropdownMenu
            style={styles.inputs}
            bgColor={"transparent"}
            handler={selection => this.setState({ status: selection })}
            data={status}
          >
            <Text style={styles.textByRegister}>
              By registering on this App you confirm that you have read and
              accept our policy
            </Text>
          </DropdownMenu>
        </View> */}

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.submitRegister}
        >
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handlePress}
        >
          <Text style={styles.btnText}>Have an account?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;
