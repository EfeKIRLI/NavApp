import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Header = ({goBack = () => {}, text }) => {

    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity 
            // onPress={() => navigation.goBack()}
            // onPress={goBack}
            onPress={()=>navigation.goBack()}
            >
                <Text style={{backgroundColor:'white',width:'35%'}}> Go Back From Header </Text>

            </TouchableOpacity>

                <Text>Welcome to Header Component! </Text>
        </View>
    )
}

export default Header


