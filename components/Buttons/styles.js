import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 160,
    borderRadius: 20,
    borderColor: "#2cd18a",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2cd18a",
    position: "absolute",
    bottom: -120,
    left: 20
  },
  containerAnon: {
    height: 50,
    width: 160,
    borderRadius: 20,
    borderColor: "grey",
    opacity: 0.7,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    position: "absolute",
    bottom: -120,
    left: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "white"
  },
  addItemsView: {
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 8
  },
  addItemsText: {
    fontFamily: "Arial",
    fontSize: 15,
    textAlign: "left",
    color: "#333333",
    bottom: -3,
    marginLeft: -20
  }
});

export default styles;
