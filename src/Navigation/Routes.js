
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator(); // fonksiyonu, yığın tabanlı bir navigasyon sistemi oluşturur.

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' >
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes