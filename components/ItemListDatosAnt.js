import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ ant }) => {
  return (
    <>
      <View style={styles.textKey}>
        <Text style={styles.title}>Name: </Text>
        <Text style={styles.title}>Length: </Text>
        <Text style={styles.title}>Color: </Text>
        <Text style={styles.title}>Weight: </Text>
        <Text style={styles.title}>Status: </Text>
      </View>
      <View style={styles.textValue}>
        <Text numberOfLines={1} style={styles.description}>{ant.name}</Text>
        <Text numberOfLines={1} style={styles.description}>{ant.length}</Text>
        <Text numberOfLines={1} style={[styles.description, { color: `${ant.color}` }]}>{ant.color}</Text>
        <Text numberOfLines={1} style={styles.description}>{ant.weight}</Text>
        <Text numberOfLines={1} style={[styles.description, { color: `${ant.colorState}` }]}>{ant.probabilityState}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textKey: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textValue: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#312f2c",
  },
  description: {
    fontSize: 12,
    color: "#312f2c",
  },
});
