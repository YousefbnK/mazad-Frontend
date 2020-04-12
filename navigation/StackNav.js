import { createStackNavigator } from "react-navigation-stack";

// Components
import HomeScreen from "../components/HomeScreen";
import AuctionList from "../components/AuctionList";
import BiddingScreen from "../components/BiddingScreen";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import BiddingScreenTest from "../components/BiddingScreen/BiddingScreenTest";

const StackNav = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AuctionList: AuctionList,
    BiddingScreen: BiddingScreen,
    Test: BiddingScreenTest,
    Login: Login,
    Register: Register,
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default StackNav;
