import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

//Styles
import styles from "./styles";
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handlePress = () => this.props.navigation.navigate("Register");

  submitLogin = () => authStore.login(this.state, this.props.navigation);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>MAZAD APP</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="username"
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

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.submitLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handlePress}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Login.navigationOptions = {
  headerTransparent: "true",
};

export default Login;
