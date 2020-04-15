import { createStackNavigator } from "react-navigation-stack";

// Components

import LiveAuctionList from "../components/AuctionList/LiveAuctionList";
import BiddingScreen from "../components/BiddingScreen";

const AuctionNav = createStackNavigator({
  AuctionList: LiveAuctionList,
  BiddingScreen: BiddingScreen,
});

export default AuctionNav;
