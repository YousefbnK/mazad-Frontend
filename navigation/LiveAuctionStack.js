import { createStackNavigator } from "react-navigation-stack";

// Components

import LiveAuctionList from "../components/AuctionList/LiveAuctionList";
import BiddingScreen from "../components/BiddingScreen";

const LiveAuctionStack = createStackNavigator({
  AuctionListLive: LiveAuctionList,
  BiddingScreen: BiddingScreen,
});

export default LiveAuctionStack;
