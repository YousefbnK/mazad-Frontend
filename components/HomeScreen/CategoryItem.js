import React from "react";
import { Text, Image, View } from "react-native";

//Style
import styles from "./styles";

const CategoryItem = props => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: `${props.item.item.image}` }}
      />
      <Text style={styles.item}>{props.item.item.name}</Text>
    </View>
  );
};

export default CategoryItem;
