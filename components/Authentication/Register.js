import React, { Component } from "react";

//Styles
import styles from "./styles";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { CheckBox, ListItem } from "native-base";

//Stores
import authStore from "../../stores/authStore";

class Register extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    vender: false,
  };

  handlePress = () => this.props.navigation.navigate("Login");

  handleCheckBox = () => this.setState({ vender: !this.state.vender });

  submitRegister = () => authStore.register(this.state, this.props.navigation);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MAZAD APP</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="First Name"
            onChangeText={(first_name) => this.setState({ first_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Last Name"
            onChangeText={(last_name) => this.setState({ last_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Username"
            onChangeText={(username) => this.setState({ username })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <View>
          <ListItem style={{ margin: 20 }}>
            <TouchableOpacity onPress={this.handleCheckBox}>
              <CheckBox
                checked={this.state.vender}
                style={{ position: "absolute" }}
              />
              <Text style={{ marginLeft: 30, marginTop: 2 }}>
                Register as a vender
              </Text>
            </TouchableOpacity>
          </ListItem>
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

Register.navigationOptions = {
  headerTransparent: "true",
};

export default Register;
