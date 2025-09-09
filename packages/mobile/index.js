import { registerRootComponent } from "expo";
import "./global.css";
import { SafeAreaView } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { Button } from "./components/ui/button";
import { Text } from "./components/ui/text";

export function App() {
  return (
    <SafeAreaView>
      <Button>
        <Text>ABC</Text>
      </Button>
      <PortalHost />
    </SafeAreaView>
  );
}

registerRootComponent(App);
