import React from "react";
import { Block, Text } from "expo-ui-kit";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./routes/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
