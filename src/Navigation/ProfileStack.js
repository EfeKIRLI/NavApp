import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home,ProductDetails } from "../Screens";
import navigationsStrings from "../constants/navigationsStrings";

const Stack = createNativeStackNavigator()
export default function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name={navigationsStrings.HOME} component={Home} />
        <Stack.Screen name={navigationsStrings.PRODUCT_DETAILS} component={ProductDetails} />
      </Stack.Navigator>
    );
  } 