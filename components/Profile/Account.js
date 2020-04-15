import React from "react";

//Styles
import styles from "./styles";
import { View } from "react-native";
import { ListItem } from "react-native-elements";

//Components

import BaseIcon from "./BaseIcon";
import Chevron from "./Chevron";

const Account = () => {
  return (
    <View>
      <ListItem
        hideChevron
        title="Purchase History"
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{
              backgroundColor: "#FFADF2",
            }}
            icon={{
              type: "material",
              name: "dvr",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Currency"
        rightTitle="KWD"
        rightTitleStyle={{ fontSize: 15 }}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{ backgroundColor: "#FAD291" }}
            icon={{
              type: "font-awesome",
              name: "money",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Location"
        rightTitle="Kuwait"
        rightTitleStyle={{ fontSize: 15 }}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{ backgroundColor: "#57DCE7" }}
            icon={{
              type: "material",
              name: "place",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
      <ListItem
        title="Language"
        rightTitle="English"
        rightTitleStyle={{ fontSize: 15 }}
        onPress={() => this.onPressOptions()}
        containerStyle={styles.listItemContainer}
        leftIcon={
          <BaseIcon
            containerStyle={{ backgroundColor: "#FEA8A1" }}
            icon={{
              type: "material",
              name: "language",
            }}
          />
        }
        rightIcon={<Chevron />}
      />
    </View>
  );
};

export default Account;
