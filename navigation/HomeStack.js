import { createStackNavigator } from "react-navigation-stack";

// Components

import HomeScreen from "../components/HomeScreen";

const HomeNav = createStackNavigator({
  HomeScreen: HomeScreen
});

export default HomeNav;
