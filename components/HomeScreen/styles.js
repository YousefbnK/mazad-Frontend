import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "grey",
    margin: 5,
    width: 100,
    height: 55,
    padding: 10,
    color: "white"
  },
  grid: {
    marginBottom: 32,
    marginTop: 20,
    height: "100%",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    padding: 8,
    margin: 5
  },
  container: {
    marginTop: Constants.statusBarHeight
  }
});

export default styles;
