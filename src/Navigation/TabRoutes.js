
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../Screens/Home/Home';
// import Profile from '../Screens/Profile/Profile';
import { Home, Profile, Explore } from '../Screens';
import navigationsStrings from '../constants/navigationsStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';



const Tab = createBottomTabNavigator();


const TabRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName={navigationsStrings.HOME}
            screenOptions={{
                headerShown: true,
                tabBarActiveBackgroundColor: 'gray',
                tabBarActiveTintColor: 'white',
                tabBarInactiveBackgroundColor: 'white',
                tabBarInactiveTintColor: 'gray'

            }}
        >

            <Tab.Screen name={navigationsStrings.HOME} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={imagePath.icHome} style={{ width: 40, height: 40 }} />
                        )
                    }
                }}
            />

            <Tab.Screen name={navigationsStrings.EXPLORE} component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={imagePath.icExplore} style={{ width: 30, height: 30 }} />
                        )
                    }
                }}
            />
            <Tab.Screen name={navigationsStrings.PROFILE} component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image source={imagePath.icProfile} style={{ width: 30, height: 30 }} />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default TabRoutes;




