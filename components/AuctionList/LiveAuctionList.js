import React, { Component } from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Style
import { View, ScrollView, Text } from "react-native";

//Stores
import auctionStore from "../../stores/auctionStore";

//Components
import AuctionItem from "./AuctionItem";
import AddAuctionButton from "../Buttons/AddAuctionButton";

class LiveAuctionList extends Component {
  state = {
    endAuction: this.props.navigation.getParam("endAuction"),
  };

  render() {
    if (auctionStore.loadingAuc) {
      return <Spinner />;
    } else {
      const ONE_HOUR = 60 * 60 * 1000;
      const liveAuaction = auctionStore.auctions.filter(
        (auction) => new Date(auction.start_date) - new Date() < ONE_HOUR
      );

      if (this.state.endAuction) {
        alert("The auction has ended, thank you for participating");
      }

      const auctions = liveAuaction.map((auction) => (
        <AuctionItem
          item={auction}
          navigation={this.props.navigation}
          key={auction.title}
        />
      ));

      console.log(auctionStore.catObj);

      return (
        <View>
          <ScrollView>{auctions}</ScrollView>
        </View>
      );
    }
  }
}

LiveAuctionList.navigationOptions = {
  title: "Live Auctions",
  headerRight: <AddAuctionButton />,
};

export default observer(LiveAuctionList);
