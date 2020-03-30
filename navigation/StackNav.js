import { createStackNavigator } from "react-navigation-stack";

// Components
import HomeScreen from "../components/HomeScreen";

const StackNav = createStackNavigator(
  {
    HomeScreen: HomeScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default StackNav;
