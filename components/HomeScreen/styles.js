import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 2;
// item size
const itemHeight = 150;
const itemMargin = 20;

const styles = StyleSheet.create({
  categoryTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5
  },
  grid: {
    marginBottom: 32,
    marginTop: 20,
    height: "100%",
    alignItems: "center"
  },
  image: {
    width: (SCREEN_WIDTH - (numColumns + 1) * itemMargin) / numColumns,
    height: itemHeight,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  container: {
    marginTop: Constants.statusBarHeight
  },
  cardContainer: {
    margin: 10,
    width: (SCREEN_WIDTH - (numColumns + 1) * itemMargin) / numColumns,
    height: itemHeight + 50,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 15
  }
});

export default styles;
