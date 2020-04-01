import { createStackNavigator } from "react-navigation-stack";

// Components
import HomeScreen from "../components/HomeScreen";
import AuctionList from "../components/AuctionList";

const StackNav = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AuctionList: AuctionList
  },
  {
    initialRouteName: "AuctionList"
  }
);

export default StackNav;
