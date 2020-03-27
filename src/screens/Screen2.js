import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function ScreenTab() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Hola mundo</Text>
        <Text style={styles.text}>By Henry Villavicencio</Text>
        <Image
          style={styles.logo}
          source={require("../assets/img/initgrammers.png")}
        />
        <View style={styles.containerImage}>
          <Image
            style={styles.img}
            source={require("../assets/img/background-blue.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#5259de",
    color: "white",
    margin: 8,
    marginBottom: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    margin: 16
  },
  text: {
    color: "white",
    fontSize: 22,
    marginLeft: 16,
    margin: 8
  },
  containerImage: {
    flex: 1,
    justifyContent: "flex-end"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  logo: {
    width: "auto",
    height: 50,
    margin: 16
  }
});
