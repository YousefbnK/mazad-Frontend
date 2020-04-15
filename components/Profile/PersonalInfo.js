import React from "react";
import { observer } from "mobx-react";

//Styles
import styles from "./styles";
import { Text, View } from "react-native";
import { Avatar } from "react-native-elements";

//Stores
import authStore from "../../stores/authStore";

const PersonalInfo = () => {
  return (
    <View style={styles.userRow}>
      <View style={styles.userImage}>
        <Avatar
          rounded
          size="large"
          title={`${authStore.userData.firstName
            .charAt(0)
            .toUpperCase()}${authStore.userData.lastName
            .charAt(0)
            .toUpperCase()}`}
        />
      </View>
      <View>
        <Text style={{ fontSize: 16 }}>
          {`${authStore.userData.firstName} ${authStore.userData.lastName}`}
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 16,
          }}
        >
          {authStore.userData.email}
        </Text>
      </View>
    </View>
  );
};

export default observer(PersonalInfo);
