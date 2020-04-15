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
    // flex: 1,
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
    justifyContent: "center",
    alignItems: "center",
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
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 0,
    margin: 3,
  },
  container: {
    height: 50,
    width: 175,
    borderRadius: 20,
    borderColor: "#2cd18a",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 0,
    margin: 3,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  badge: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    justifyContent: "flex-start",
    paddingTop: 2,
  },
});

export default styles;
