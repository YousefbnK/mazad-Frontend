import React from "react";

//Styles
import styles from "./styles";
import { View } from "react-native";
import { ListItem } from "react-native-elements";

//Components

import BaseIcon from "./BaseIcon";
import Chevron from "./Chevron";

const More = () => {
  return (
    <View>
      <ListItem
        title="About US"
        onPress={() => this.onPressOptions()}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{ backgroundColor: "#A4C8F0" }}
            icon={{
              type: "ionicon",
              name: "md-information-circle",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Terms and Policies"
        onPress={() => this.onPressOptions()}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{ backgroundColor: "#C6C7C6" }}
            icon={{
              type: "entypo",
              name: "light-bulb",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Share our App"
        onPress={() => this.onPressOptions()}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{
              backgroundColor: "#C47EFF",
            }}
            icon={{
              type: "entypo",
              name: "share",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Rate Us"
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{
              backgroundColor: "#FECE44",
            }}
            icon={{
              type: "entypo",
              name: "star",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Send FeedBack"
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{
              backgroundColor: "#00C001",
            }}
            icon={{
              type: "materialicon",
              name: "feedback",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
    </View>
  );
};

export default More;
