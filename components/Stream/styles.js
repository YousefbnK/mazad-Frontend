import { StyleSheet, Dimensions } from "react-native";

// screen sizing
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    height: height - 300,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default styles;
