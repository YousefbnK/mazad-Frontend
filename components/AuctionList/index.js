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
  render() {
    if (auctionStore.loadingAuc) {
      return <Spinner />;
    } else {
      const auctions = auctionStore.filterAuctionsList.map((auction) => (
        <AuctionItem
          item={auction}
          navigation={this.props.navigation}
          key={auction.title}
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
  title: auctionStore.catObj ? auctionStore.catObj.name : "AuctionListl",
  headerRight: <AddAuctionButton />,
};

export default observer(AuctionList);
