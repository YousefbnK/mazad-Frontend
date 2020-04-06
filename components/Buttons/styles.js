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
    bottom: -200,
    left: 20
  },
  containerAnon: {
    height: 50,
    width: 160,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    position: "absolute",
    bottom: -200,
    left: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "white"
  }
});

export default styles;
