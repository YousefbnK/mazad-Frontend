import { createStackNavigator } from "react-navigation-stack";

// Components

import HomeScreen from "../components/HomeScreen";
import AuctionList from "../components/AuctionList";
import BiddingScreen from "../components/BiddingScreen";

const HomeNav = createStackNavigator({
  Home: HomeScreen,
  AuctionList: AuctionList,
  BiddingScreen: BiddingScreen,
});

export default HomeNav;
