import React, { Component } from "react";

//Styles
import styles from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

//Stores
import authStore from "../../stores/authStore";

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    vendor: false
  };

  handlePress = () => this.props.navigation.navigate("Login");

  submitRegister = () => authStore.register(this.state);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="First Name"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Last Name"
            onChangeText={last_name => this.setState({ last_name })}
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
