import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import Tab from "./Tab";

export default props => {
  const { state, descriptors, activeTintColor, navigation } = props;

  const { routes } = state;
  return (
    <SafeAreaView
    // style={{ backgroundColor: activeTintColor }}
    >
      <View style={styles.container}>
        {routes.map((route, index) => {
          const isFocused = state.index === index;

          const { options } = descriptors[route.key];

          const onPress = () => {
            navigation.navigate(route.name);
          };

          return (
            <Tab
              key={index}
              title={options.title}
              icon={options.icon}
              isFocused={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "space-around",
    backgroundColor: "white"
  }
});
