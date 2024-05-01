import React from "react";
import { View, Text, Pressable, Button } from "react-native";
import style from "./style";
import navigationsStrings from "../../constants/navigationsStrings";
import Routes from "../../Navigation/Routes";
import Header from "../../Components/Header";


const Explore = ({ navigation, route }) => {
  // const { title } = route.params

  const goToHome = () => {
    // navigation.navigate(navigationsStrings.HOME,{title)
    // navigation.popToTop() //Navigates back to the very first screen (root screen) in the current navigation stack.
    // console.log(route.params.title)

    navigation.navigate(navigationsStrings.HOME)
  }

  const goToSearch = () => { 
    navigation.navigate(navigationsStrings.SEARCHH)
  }
  return (
    <View style={style.container}>
      <Header text='Explore' />
      <View style={style.content} >
        <Button 
        title="Search"
        onPress={(goToSearch)}
        /> 
        <Pressable onPress={(goToHome)}>
          <Text style={{ color: 'blue', fontSize: 20 }} > Go To Home </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Explore;
