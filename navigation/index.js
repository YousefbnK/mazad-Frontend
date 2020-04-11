import { createAppContainer } from "react-navigation";
import SwitchNav from "./SwitchNav";
import StackNav from "./StackNav";

const AppContainer = createAppContainer(StackNav);

export default AppContainer;
