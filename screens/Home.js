import React, { useContext } from "react";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
// Providers
import { AntsContext } from "../provider/antsProvider";
// Components
import List from "../components/List";

export default () => {
  const { ants } = useContext(AntsContext);
  return (
    <ImageBackground
      source={require("../assets/BG.png")}
      resizeMode="repeat"
      style={styles.container}
    >
      <List ants={ants} />
    </ImageBackground>
  );
};
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: width,
    height: height,
  },
});
