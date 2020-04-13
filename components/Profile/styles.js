import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
  },
  userRow: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: "#ECECEC",
  },
  container: {
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: "#F4F5F4",
  },
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    color: "gray",
    fontWeight: "500",
  },
  iconContainer: {
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    height: 34,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 18,
    width: 34,
  },
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  profileText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    margin: 20,
    textDecorationLine: "underline",
  },
});

export default styles;
