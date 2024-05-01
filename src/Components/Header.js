import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Header = ({ goBack = () => { }, text }) => {
    //navigation props olarak tanımlamaya gerek kalmadı. 
    // We don't need to define the "navigation" inside the props
    const navigation = useNavigation()

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems:'center',height: 50 }}>
            {!!goBack ? <TouchableOpacity
                // onPress={() => navigation.goBack()}
                // onPress={goBack}
                // onPress={() => navigation.goBack()}
                // onPress={!!goBack ? goBack : () => navigation.goBack()}
                onPress={() => navigation.goBack()}
            >
                {/* <Text style={{ backgroundColor: 'white', width: '80%'  }}> Go Back From Header </Text> */}
                <Text style={{
                    backgroundColor: 'transparent',
                    fontWeight: '700',
                    
                }}
                > Back </Text>

            </TouchableOpacity> : <Text />}

            <Text style={{ color: 'black', fontSize: 16, fontStyle: 'italic', lineHeight: 40,marginHorizontal:50}} > {text} </Text>
        </View>
    )
}

export default Header;


