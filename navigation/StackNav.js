import { createStackNavigator } from "react-navigation-stack";

// Components
import HomeScreen from "../components/HomeScreen";
import AuctionList from "../components/AuctionList";
import BiddingScreen from "../components/BiddingScreen";

const StackNav = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AuctionList: AuctionList,
    BiddingScreen: BiddingScreen
  },
  {
    initialRouteName: "BiddingScreen"
  }
);

export default StackNav;
