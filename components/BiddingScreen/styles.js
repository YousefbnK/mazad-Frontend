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
    // flex: 1,
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
    position: "relative",
    marginTop: height / 6,
    alignContent: "center",
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
    // alignSelf: "flex-start",
    // position: "absolute",
    bottom: 0,
    margin: 3,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
  },

  camra: {
    height: "67%",
    borderColor: "red",
  },

  textsection: {
    height: "10%",
    borderColor: "black",
  },

  biddingsection: {
    flexDirection: "row",
    borderColor: "red",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  badge: {
    borderColor: "black",
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Arial",
    justifyContent: "flex-start",
    paddingTop: 2,
    paddingLeft: 20,
  },
  pleaseWait: {
    marginTop: "5%",
    fontSize: 14,
    fontFamily: "Arial",
    marginLeft: "3%",
  },
  bidMessage: {
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 10,
    marginTop: 20,
    right: 40,
    fontSize: 15,
    fontFamily: "Arial",
  },
});

export default styles;
