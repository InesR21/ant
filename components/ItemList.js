import React, { useContext } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { AntsContext } from "../provider/antsProvider";
import ItemListDatosAnt from "./ItemListDatosAnt";
import ItemListImage from "./ItemListImage";

export default ({ ant }) => {
  const { calculateAntProbability } = useContext(AntsContext);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ opacity: 1}}
      onPress={() => {
        calculateAntProbability(ant);
      }}
    >
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
            <Text numberOfLines={1} style={styles.title}>
              {ant.probability}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    marginTop: 15,
    borderRadius: 1,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 3,
    borderWidth: 0.2,
    borderColor: "#bababa",
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
    color: "#1e0039",
    marginRight: 10,
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
