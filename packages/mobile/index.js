import { registerRootComponent } from "expo";
import "./global.css";
import { SafeAreaView } from "react-native";
import { Button } from "./dls";

export function App() {
  return (
    <SafeAreaView>
      <Button />
    </SafeAreaView>
  );
}

registerRootComponent(App);
