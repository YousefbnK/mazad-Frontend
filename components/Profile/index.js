import React, { Component } from "react";

//Styles
import styles from "./styles";
import { ScrollView, Switch, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

//Components
import InfoText from "./InfoText";
import BaseIcon from "./BaseIcon";
import Chevron from "./Chevron";
import authStore from "../../stores/authStore";
import LogoutButton from "../Buttons/LogoutButton";

class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar rounded size="large" title="YK" />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>
              {authStore.user ? authStore.user.name : "Yousef Alkhalifah"}
            </Text>
            <Text
              style={{
                color: "gray",
                fontSize: 16,
              }}
            >
              {authStore.user ? authStore.user.email : "Email"}
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
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
        <InfoText text="More" />
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
      </ScrollView>
    );
  }
}

Profile.navigationOptions = {
  title: "Profile",
  headerRight: <LogoutButton />,
};

export default Profile;