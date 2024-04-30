import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Header = ({ goBack = () => { }, text }) => {
    //navigation props olarak tanımlamaya gerek kalmadı. 
    // We don't need to define the "navigation" inside the props
    const navigation = useNavigation()

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40 }}>
            { !! goBack ? <TouchableOpacity
                // onPress={() => navigation.goBack()}
                // onPress={goBack}
                // onPress={() => navigation.goBack()}
                onPress={!!goBack ? goBack : () => navigation.goBack()}
            >
                <Text style={{ backgroundColor: 'white', width: '80%'  }}> Go Back From Header </Text>

            </TouchableOpacity> : <Text />}

            <Text style={{color:'white', fontSize:16}} >Welcome to Header Component! </Text>
        </View>
    )
}

export default Header


