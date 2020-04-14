import { createStackNavigator } from "react-navigation-stack";

//Navs
import StackNav from "./StackNav";
import BottomTabNav from "./BottomTabNav";

const SwitchNav = createStackNavigator(
  {
    BottomTabNav: BottomTabNav,
    StackNav: StackNav,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default SwitchNav;
