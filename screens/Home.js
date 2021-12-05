import React, { useContext } from "react";
import { View } from "react-native";
// Providers
import { AntsContext } from "../provider/antsProvider";
// Components
import List from "../components/List";

export default () => {
  const { ants } = useContext(AntsContext);
  return (
    <View style={{ backgroundColor: "#D8D8D6", height: "100%", width: "100%"}}>
      <List ants={ants} />
    </View>
  );
};
