import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Explore,Search} from "../Screens";
import navigationsStrings from "../constants/navigationsStrings";

const Stack = createNativeStackNavigator()

export default function ExploreStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name={navigationsStrings.EXPLORE} component={Explore} />
        <Stack.Screen name={navigationsStrings.SEARCHH} component={Search} />
      </Stack.Navigator>
    );
  } 