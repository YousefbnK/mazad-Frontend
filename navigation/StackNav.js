import { createStackNavigator } from "react-navigation-stack";

// Components

const StackNav = createStackNavigator(
  {
    HomeScreen: HomeScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default StackNav;
