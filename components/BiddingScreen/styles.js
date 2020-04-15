import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  info: {
    flex: 1,
  },
  description: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Arial",
    marginTop: 20,
  },
  initialPrice: {
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  currentBid: {
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 450,
  },
  buttonView: {
    flex: 1,
    marginEnd: 20,
    marginLeft: 20,
    position: "relative",
    bottom: -100,
  },
  textInput: {
    height: 50,
    alignSelf: "flex-start",
    borderColor: "grey",
    borderWidth: 2,
  },
  shake: {
    height: 50,
    width: 160,
    alignSelf: "flex-start",
  },
  nodeCameraView: {
    width: width,
    height: height - 300,
  },
  liveStreamText: {
    fontSize: 16,
    fontFamily: "Arial",
    color: "black",
    fontStyle: "italic",
  },
  videoTextView: {
    width: width,
    height: height - 300,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
