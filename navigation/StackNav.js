import { createStackNavigator } from "react-navigation-stack";

// Components
import HomeScreen from "../components/HomeScreen";
import AuctionList from "../components/AuctionList";
import BiddingScreen from "../components/BiddingScreen";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import BiddingScreenTest from "../components/BiddingScreen/BiddingScreenTest";
import Profile from "../components/Profile";

const StackNav = createStackNavigator({
  Profile: Profile,
  Login: Login,
  Register: Register,
  AuctionList: AuctionList,
  BiddingScreen: BiddingScreen,
  // Test: BiddingScreenTest,
});

export default StackNav;
