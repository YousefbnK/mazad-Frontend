import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  auctionContainer: {
    flex: 1,
    margin: 10,
    alignItems: "flex-start",
    height: 115,
    backgroundColor: "#DCDCDC",
    opacity: 0.75,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  auctionContainerStart: {
    flex: 1,
    margin: 10,
    alignItems: "flex-start",
    height: 115,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 20,
  },
  auctionName: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    color: "#333333",
    padding: 15,
  },
  countDownView: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 15,
  },
  countDownTimer: {
    alignSelf: "flex-end",
    paddingBottom: 10,
    paddingEnd: 10,
  },
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
    height: 115,
    opacity: 0.75,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 20,
  },
});

export default styles;
