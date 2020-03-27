import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./src/screens/Screen";
import TabBar from "./src/navigation/TabBar";
export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
}
