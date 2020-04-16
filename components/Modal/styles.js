import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  scrallContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaeaea",
    width: 250,
    height: 45,
  },

  inputContainer: {
    borderColor: "grey",
    borderWidth: 1,
    width: 350,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  desContainer: {
    borderColor: "grey",
    borderWidth: 1,
    width: 250,
    height: 150,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "baseline",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  desInputs: {
    height: 45,
    margin: 5,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  textByRegister: {
    color: "black",
    fontSize: 12,
    // fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    // textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
  fixToText: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 2,
    width: 250,
    height: 45,
    marginBottom: 20,
    backgroundColor: "#eaeaea",
    borderRadius: 20,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
  },
});

export default styles;
