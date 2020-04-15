import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  description: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Arial",
    marginTop: 20,
  },
  bidText: {
    flex: 1,
    position: "absolute",
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
  },
  buttonView: {
    marginEnd: 20,
    marginLeft: 20,
    borderColor: "grey",
    borderWidth: 5,
    position: "relative",
    marginTop: height / 6,
    alignContent: "center",
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
  textInput: {
    height: 50,
    width: 175,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
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
