import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditProfile,Profile } from "../Screens";
import navigationsStrings from "../constants/navigationsStrings";

const Stack = createNativeStackNavigator()
export default function ProfileStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name={navigationsStrings.PROFILE} component={Profile} />
        <Stack.Screen name={navigationsStrings.EDIT_PROFILE} component={EditProfile} />
      </Stack.Navigator>
    );
  } 