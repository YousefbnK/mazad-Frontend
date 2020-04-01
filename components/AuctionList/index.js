import React from "react";
import { observer } from "mobx-react";

//Style
import { View, ScrollView, Text } from "react-native";

//Stores
import auctionStore from "../../stores/auctionStore";

//Components
import AuctionItem from "./AuctionItem";

const AuctionList = () => {
  const auctions = auctionStore.auctions.map(item => (
    <AuctionItem item={item} />
  ));
  return (
    <View>
      <ScrollView>{auctions}</ScrollView>
    </View>
  );
};

export default observer(AuctionList);
