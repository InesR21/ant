import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Ants",
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 30,
              },
              shadowOpacity: 0.35,
              shadowRadius: 3.84,
              elevation: 3,
              borderWidth: 0.2,
              borderColor: "#bababa"
            },
            headerTintColor: "#7a7a7a",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
