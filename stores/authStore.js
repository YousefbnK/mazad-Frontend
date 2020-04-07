import { decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      console.log("User logged in", user);
      await this.setUser(user.access);
      navigation.navigate("HomeScreen");
    } catch (err) {
      console.log(err);
      console.log("something went wrong logging in");
    }
  };

  register = async (userData, navigation) => {
    try {
      const res = await instance.post("register/", userData);
      const data = res.data;
      console.log("User registered", data);
      await this.setUser(data.access);
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error(error);
    }
  };

  logout = async () => {
    await this.setUser();
    AsyncStorage.clear();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);
      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        await this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
