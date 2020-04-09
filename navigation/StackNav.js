import { createStackNavigator } from "react-navigation-stack";

// Components
import HomeScreen from "../components/HomeScreen";
import AuctionList from "../components/AuctionList";
import BiddingScreen from "../components/BiddingScreen";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

const StackNav = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AuctionList: AuctionList,
    BiddingScreen: BiddingScreen,
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default StackNav;
