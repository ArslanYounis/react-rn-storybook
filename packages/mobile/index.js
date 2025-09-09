import { registerRootComponent } from "expo";
import "./global.css";
import { View } from "react-native";
import { Button } from "./src";

export function App() {
  return (
    <View style={{ width: 400, height: 500 }}>
      <Button />
    </View>
  );
}

registerRootComponent(App);
