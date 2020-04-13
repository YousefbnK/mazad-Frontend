import { createStackNavigator } from "react-navigation-stack";

// Components

import Profile from "../components/Profile";

const ProfileStack = createStackNavigator({
  Profile: Profile,
});

export default ProfileStack;
