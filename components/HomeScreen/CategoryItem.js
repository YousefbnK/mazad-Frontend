import React from "react";

//Stores
import auctionStore from "../../stores/auctionStore";

//Style
import styles from "./styles";
import { Text, Image, View, TouchableOpacity } from "react-native";

const CategoryItem = (props) => {
  const navigate = () => {
    auctionStore.setCatID(props.item.item.id);
    props.navigation.navigate("AuctionList", { catId: props.item.item.id });
  };

  return (
    <TouchableOpacity onPress={navigate}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: `${props.item.item.image}` }}
        />
        <Text style={styles.categoryTitle}>{props.item.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
