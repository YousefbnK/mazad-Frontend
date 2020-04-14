import { createStackNavigator } from "react-navigation-stack";

// Components
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

const StackNav = createStackNavigator({
  Login: Login,
  Register: Register,
});

export default StackNav;
