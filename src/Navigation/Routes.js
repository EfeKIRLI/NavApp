
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../Screens/Home/Home';
// import Profile from '../Screens/Profile/Profile';
import { Home,Profile, Explore } from '../Screens';
import navigationsStrings from '../constants/navigationsStrings';

const Stack = createNativeStackNavigator(); // fonksiyonu, yığın tabanlı bir navigasyon sistemi oluşturur.

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={navigationsStrings.HOME} >
            {/* <Stack.Navigator initialRouteName="Home" > */}
                <Stack.Screen name={navigationsStrings.HOME} component={Home } />
                <Stack.Screen name={navigationsStrings.PROFILE} component={Profile } />
                <Stack.Screen name={navigationsStrings.EXPLORE} component={Explore } />

                {/* <Stack.Screen name="Home" component={Home } />
                <Stack.Screen name="Profile" component={Profile } />
                <Stack.Screen name="Explore" component={Explore } /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;




