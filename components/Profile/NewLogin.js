import React from "react";

//Styles
import styles from "./styles";
import { Text, View, TouchableOpacity } from "react-native";

//Components

const NewLogin = (props) => {
  const handleLogin = () => {
    props.navigation.navigate("Login");
  };

  const handleRegister = () => {
    props.navigation.navigate("Register");
  };

  console.log("Props", props);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.title}>MAZAD APP</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.profileText}>Log in</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 17, margin: 5 }}>or</Text>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.profileText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewLogin;
