import React, { Component } from "react";
import { observer } from "mobx-react";

//Style
import { View, ScrollView } from "react-native";

//Stores
import auctionStore from "../../stores/auctionStore";

//Components
import AuctionItem from "./AuctionItem";

class AuctionList extends Component {
  render() {
    auctions = auctionStore.auctions.map(auction => (
      <AuctionItem
        item={auction}
        navigation={this.props.navigation}
        key={auction.name}
      />
    ));
    return (
      <View>
        <ScrollView>{auctions}</ScrollView>
      </View>
    );
  }
}

AuctionList.navigationOptions = {
  title: "Auctions"
};

export default observer(AuctionList);
