import React from "react";
import { FlatList, Text } from "react-native";

//Style
import styles from "./styles";

const CategoriesList = props => {
  return (
    <>
      <FlatList
        contentContainerStyle={styles.grid}
        numColumns={3}
        data={props.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </>
  );
};

export default CategoriesList;
