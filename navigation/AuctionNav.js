import { createStackNavigator } from "react-navigation-stack";

// Components

import AuctionList from "../components/AuctionList";
import BiddingScreen from "../components/BiddingScreen";

const AuctionNav = createStackNavigator({
  AuctionList: AuctionList,
  BiddingScreen: BiddingScreen,
});

export default AuctionNav;
