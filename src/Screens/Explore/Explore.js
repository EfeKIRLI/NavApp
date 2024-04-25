import React from "react";
import { View,Text, Pressable } from "react-native";
import style from "./style";
import navigationsStrings from "../../constants/navigationsStrings";
import Routes from "../../Navigation/Routes";


const Explore = ({navigation,route}) =>  { 
  // const { title } = route.params

  const goToScreen = () => { 
    // navigation.navigate(navigationsStrings.HOME,{title)
    navigation.popToTop() //Navigates back to the very first screen (root screen) in the current navigation stack.
    // console.log(route.params.title)

  }
  return (
    <View style={style.container}> 
      <Text> 
        EXPLORE
      </Text>
      <Pressable onPress={(goToScreen)}> 
        <Text style={{color:'blue', fontSize:20}} > Go To Home </Text>
      </Pressable>
    </View>
  )
}

export default Explore;
