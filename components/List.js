import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import ItemList from "./ItemList";

export default ({ ants }) => {
  const handleEmpty = () => <Text style={styles.empty}> No data present!</Text>;
  const renderItem = ({ item }) => <ItemList ant={item} />;
  return (
    <FlatList
      ListEmptyComponent={handleEmpty}
      data={ants}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};
const styles = StyleSheet.create({
  empty: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a7a7a",
    marginTop: 40,
  },
});
