import React, { useContext } from "react";
import { TouchableWithoutFeedback, Text, View, StyleSheet } from "react-native";
import { AntsContext } from "../provider/antsProvider";
import ItemListDatosAnt from "./ItemListDatosAnt";
import ItemListImage from "./ItemListImage";

export default ({ ant }) => {
    const { calculateAntProbability } = useContext(AntsContext)
  return (
    <TouchableWithoutFeedback onPress={() => {calculateAntProbability(ant)}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ItemListImage lengthImage={ant.length} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textRightContainer}>
            <ItemListDatosAnt ant={ant} />
          </View>
          <View style={styles.textLeftContainer}>
            <Text style={styles.title}>Probability</Text>
            <Text numberOfLines={1} style={styles.title}>{ant.probability}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    marginTop: 15,
    borderRadius: 3,
    backgroundColor: "#57605C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    overflow: "hidden",
  },
  textContainer: {
    flex: 4,
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#312f2c",
  },
  textRightContainer: {
    flexDirection: "row",
    flex: 4,
    margin: 5,
  },
  textLeftContainer: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
