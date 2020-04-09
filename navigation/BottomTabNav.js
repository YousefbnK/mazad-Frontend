import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import HomeStack from "./HomeStack";
import AuctionNav from "./AuctionNav";

const BottomTabNav = createBottomTabNavigator(
  {
    Home: HomeStack,
    Auctions: AuctionNav
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "Auctions") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default BottomTabNav;
