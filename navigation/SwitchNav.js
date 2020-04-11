import { createSwitchNavigator } from "react-navigation";

//Navs
import StackNav from "./StackNav";
import BottomTabNav from "./BottomTabNav";
import AuctionNav from "./AuctionNav";
import HomeStack from "./HomeStack";

const SwitchNav = createSwitchNavigator({
  // BottomTabNav: BottomTabNav,
  // HomeScreen: HomeStack,
  // AuctionNav: AuctionNav,
  StackNav: StackNav,
});

export default SwitchNav;
