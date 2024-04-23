import React from "react";
import { View, Text, StyleSheet, Pressable, Button, Alert } from "react-native";
import style from '../Home/style'
import navigationsStrings from "../../constants/navigationsStrings";


const Home = ({ navigation }) => {

    const goToScreen = () => { 
        navigation.navigate(navigationsStrings.PROFILE, {title:'Subscribe!'})
        Alert.alert('dsfds')
    }

    console.log(navigation)
    return (
        <View style={style.container}>
            <Text>HOME </Text>
            <Pressable>
                <Text>I'm pressable!</Text>
            </Pressable>

            <View style ={style.profileButtonContainer}> 
            <Button
                style={style.profileButton}
                title="Go To Profile"
                onPress={(goToScreen)}
                //     {
                //     navigation.navigate(navigationsStrings.PROFILE)
                //     Alert.alert('dsfds')
                // }
                
            // onPress={() => alert('MY FIRST ALER')}
            // disabled={true}
            />
            </View>
        </View>
    )
}

export default Home;


// onPress{() => { 
//     navigation.navigate(navigationsStrings.PROFILE)
//     Alert.alert('dasdas')
// }}

// onPress {() => { 
//     navigation.navigate(navigationsStrings.PROFILE)
//     Alert.alert('dsfdsf')
// }}