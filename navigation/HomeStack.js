import { createStackNavigator } from "react-navigation-stack";

// Components

import HomeScreen from "../components/HomeScreen";
import Register from "../components/Authentication/Register";

const HomeNav = createStackNavigator({
  Home: HomeScreen,
  Register: Register,
});

export default HomeNav;
