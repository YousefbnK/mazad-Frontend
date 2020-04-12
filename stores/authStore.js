import { decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;
  is_vender = null;

  setUser = async (token) => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      await AsyncStorage.removeItem("is_vender");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
      this.is_vender = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      console.log("User logged in", user);
      this.is_vender = res.data.is_vender;
      await AsyncStorage.setItem("is_vender", JSON.stringify(this.is_vender));

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
    const is_vender = JSON.parse(await AsyncStorage.getItem("is_vender"));
    if (token && is_vender) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);
      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        await this.setUser(token);
        this.is_vender = is_vender;
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
