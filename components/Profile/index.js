import React, { Component } from "react";
import { observer } from "mobx-react";

//Styles
import styles from "./styles";
import { ScrollView } from "react-native";

//Components
import InfoText from "./InfoText";
import authStore from "../../stores/authStore";
import LogoutButton from "../Buttons/LogoutButton";
import Account from "./Account";
import More from "./More";
import PersonalInfo from "./PersonalInfo";
import NewLogin from "./NewLogin";

class Profile extends Component {
  render() {
    if (authStore.user) {
      return (
        <ScrollView style={styles.scroll}>
          <PersonalInfo />
          <InfoText text="Account" />
          <Account />
          <InfoText text="More" />
          <More />
          <LogoutButton />
        </ScrollView>
      );
    } else {
      return <NewLogin navigation={this.props.navigation} />;
    }
  }
}

Profile.navigationOptions = {
  title: "Profile",
};

export default observer(Profile);
