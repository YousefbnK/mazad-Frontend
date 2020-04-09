import { createStackNavigator } from "react-navigation-stack";

// Components

import AuctionList from "../components/AuctionList";

const AuctionNav = createStackNavigator({
  AuctionList: AuctionList
});

export default AuctionNav;
