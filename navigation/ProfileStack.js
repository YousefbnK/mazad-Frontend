import { createStackNavigator } from "react-navigation-stack";

// Components

import Profile from "../components/Profile";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

const ProfileStack = createStackNavigator({
  Profile: Profile,
  Login: Login,
  Register: Register,
});

export default ProfileStack;
