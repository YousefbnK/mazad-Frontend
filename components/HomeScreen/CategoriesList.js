import React from "react";
import { observer } from "mobx-react";

//Style
import styles from "./styles";
import { FlatList, ScrollView, SafeAreaView, Text } from "react-native";

//Data
import auctionStore from "../../stores/auctionStore";

//Components
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.grid}
        numColumns={3}
        data={auctionStore.categoryList}
        keyExtractor={(items, index) => index.toString()}
        renderItem={item => <CategoryItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default observer(CategoriesList);
