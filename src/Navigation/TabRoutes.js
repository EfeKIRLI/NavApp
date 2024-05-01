
import React from 'react';
import { Image, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../Screens/Home/Home';
// import Profile from '../Screens/Profile/Profile';
import { Home, Profile, Explore, ProductDetails } from '../Screens';
import navigationsStrings from '../constants/navigationsStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import HomeStack from './HomeStack';


const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <Tab.Navigator
            initialRouteName={navigationsStrings.HOME}
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: 'gray',
                tabBarActiveTintColor: 'white',
                tabBarInactiveBackgroundColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel:true,
                tabBarStyle:{ 
                    backgroundColor:'#ADD8E6',
                    // position:'absolute',
                    // borderRadius:50,
                    // marginHorizontal:1
                }

            }}
        >

            <Tab.Screen name={navigationsStrings.HOME} component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image 
                            source={imagePath.icHome} 
                            style={{ tintColor: focused ? 'blue' : 'gray', 
                            width: 40, height: 40 }} />
                        )
                    }
                }}
            />

            <Tab.Screen name={navigationsStrings.EXPLORE} component={Explore}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image 
                            source={imagePath.icExplore} 
                            style={{ tintColor: focused ? 'blue' : 'gray',
                             width: 30, height: 30 }} />
                        )
                    }
                }}
            />
            <Tab.Screen name={navigationsStrings.PROFILE} component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image 
                            source={imagePath.icProfile} 
                            style={{ tintColor: focused ? 'blue' : 'gray', 
                            width: 30, height: 30 }} />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default TabRoutes;



    