import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  info: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 270
  },
  description: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Arial",
    marginTop: 20
  },
  initialPrice: {
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginTop: 200,
    marginLeft: 20,
    alignSelf: "flex-start"
  },
  currentBid: {
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start"
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 450
  },
  textInput: {
    height: 50,
    bottom: -200,
    alignSelf: "flex-start",
    position: "absolute",
    left: 40
  },
  shake: {
    height: 50,
    width: 160,
    bottom: -100,
    borderColor: "grey",
    borderWidth: 2,
    alignSelf: "flex-start",
    position: "absolute",
    left: 20
  }
});

export default styles;
