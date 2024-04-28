
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../Screens/Home/Home';
// import Profile from '../Screens/Profile/Profile';
import { Home, Profile, Explore } from '../Screens';
import navigationsStrings from '../constants/navigationsStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();


const TabRoutes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={navigationsStrings.HOME}>
                <Tab.Screen name={navigationsStrings.HOME} component={Home} />
                <Tab.Screen name={navigationsStrings.PROFILE} component={Profile} />
                <Tab.Screen name={navigationsStrings.EXPLORE} component={Explore} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabRoutes;



