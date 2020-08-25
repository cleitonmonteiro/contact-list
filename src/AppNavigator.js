import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ContactsScreen from "./screens/ContactsScreen";

import { enableScreens } from "react-native-screens";
import NewContactScreen from "./screens/NewContactScreen";
enableScreens();
const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Contacts">
        <AppStack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{ title: "Contacts" }}
        />
        <AppStack.Screen
          name="NewContact"
          component={NewContactScreen}
          options={{ title: "New Contact" }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
