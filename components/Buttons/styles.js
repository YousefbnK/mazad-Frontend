import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 160,
    flexDirection: "row",
    borderRadius: 20,
    borderColor: "#2cd18a",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2cd18a",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    margin: 3,
  },
  containerAnon: {
    height: 50,
    width: 160,
    flexDirection: "row",
    borderRadius: 20,
    borderColor: "grey",
    opacity: 0.7,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    margin: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "white",
  },
  addItemsView: {
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 8,
  },
  addItemsText: {
    fontFamily: "Arial",
    fontSize: 15,
    textAlign: "left",
    color: "#333333",
    bottom: -3,
    marginLeft: -20,
  },
  logout: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});

export default styles;
