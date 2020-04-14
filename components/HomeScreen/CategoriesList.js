import React from "react";
import { observer } from "mobx-react";

//Style
import styles from "./styles";
import { FlatList, View, Text } from "react-native";

//Data
import auctionStore from "../../stores/auctionStore";

//Components
import CategoryItem from "./CategoryItem";

const CategoriesList = ({ navigation }) => {
  console.log("categories list", auctionStore.categories);
  if (auctionStore.loadingCat) {
    return <Spinner />;
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.grid}
          numColumns={2}
          data={auctionStore.categories}
          keyExtractor={(items, index) => index.toString()}
          renderItem={(item) => (
            <CategoryItem item={item} navigation={navigation} />
          )}
        />
      </View>
    );
  }
};

export default observer(CategoriesList);
