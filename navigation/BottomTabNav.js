import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import HomeStack from "./HomeStack";
import AuctionNav from "./AuctionNav";
import ProfileStack from "./ProfileStack";

const BottomTabNav = createBottomTabNavigator(
  {
    Home: HomeStack,
    Auctions: AuctionNav,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "Auctions") {
          iconName = focused ? "ios-list-box" : "ios-list";
        } else if (routeName === "Profile") {
          iconName = "ios-contact";
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    },
  }
);

export default BottomTabNav;
