import { createStackNavigator } from "react-navigation-stack";

// Components

import HomeScreen from "../components/HomeScreen";
import AuctionList from "../components/AuctionList";
import Register from "../components/Authentication/Register";
import BiddingScreen from "../components/BiddingScreen";

const HomeNav = createStackNavigator({
  Home: HomeScreen,
  AuctionList: AuctionList,
  BiddingScreen: BiddingScreen,
  Register: Register,
});

export default HomeNav;
