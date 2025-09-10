import { registerRootComponent } from "expo";
import "./src/global.css";
import { SafeAreaView } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { Button, Avatar } from "./src/dls";

export function App() {
  return (
    <SafeAreaView>
      <Button />
      <Avatar />
      <PortalHost />
    </SafeAreaView>
  );
}

registerRootComponent(App);
