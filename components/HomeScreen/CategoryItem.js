import React from "react";

//Style
import styles from "./styles";
import { Text, Image, View, TouchableOpacity } from "react-native";

const CategoryItem = props => {
  const navigate = () => {
    props.navigation.navigate("AuctionList", props.item);
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
