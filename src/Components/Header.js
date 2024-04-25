import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Header = ({navigation}) => {
    

    return (
        <View>
            <Text>Welcome to Header Component! </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{backgroundColor:'white'}}> Go Back Form Header </Text>

            </TouchableOpacity>
        </View>
    )
}

export default Header