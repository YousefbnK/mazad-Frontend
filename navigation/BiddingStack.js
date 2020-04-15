import { createStackNavigator } from "react-navigation-stack";

// Components

import BiddingScreen from "../components/BiddingScreen";

const BiddingStack = createStackNavigator({
  BiddingScreen: BiddingScreen,
});

export default BiddingStack;
