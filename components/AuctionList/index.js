import React, { Component } from "react";
import { observer } from "mobx-react";
import { Spinner } from "native-base";

//Style
import { View, ScrollView } from "react-native";

//Stores
import auctionStore from "../../stores/auctionStore";

//Components
import AuctionItem from "./AuctionItem";
import AddAuctionButton from "../Buttons/AddAuctionButton";

class AuctionList extends Component {
  state = {
    catName: this.props.navigation.getParam("catId"),
  };

  render() {
    // console.log("CATID", this.props.navigation.getParam("catId"));
    // console.log("Auctions", auctionStore.auctions);
    if (auctionStore.loadingAuc) {
      return <Spinner />;
    } else {
      const auctions = auctionStore.auctions.map((auction) => (
        <AuctionItem
          item={auction}
          navigation={this.props.navigation}
          key={auction.id}
        />
      ));
      return (
        <View>
          <ScrollView>{auctions}</ScrollView>
        </View>
      );
    }
  }
}

AuctionList.navigationOptions = {
  title: "Auctions",
  headerRight: <AddAuctionButton />,
};

export default observer(AuctionList);
