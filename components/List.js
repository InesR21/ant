import React from "react";
import { FlatList, Text } from "react-native";
import ItemList from "./ItemList";

export default ({ ants }) => {
  const handleEmpty = () => <Text> No data present!</Text>;
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
