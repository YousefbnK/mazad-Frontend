import { createSwitchNavigator } from "react-navigation";

//Navs
import StackNav from "./StackNav";
import BottomTabNav from "./BottomTabNav";

const SwitchNav = createSwitchNavigator({
  BottomTabNav: BottomTabNav,
  StackNav: StackNav,
});

export default SwitchNav;
