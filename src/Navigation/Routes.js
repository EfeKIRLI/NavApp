
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../Screens/Home/Home';
// import Profile from '../Screens/Profile/Profile';
import { Home, Profile, Explore, ProductDetails } from '../Screens';
import navigationsStrings from '../constants/navigationsStrings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from '../Screens';


const Stack = createNativeStackNavigator(); // fonksiyonu, yığın tabanlı bir navigasyon sistemi oluşturur.
const Drawer = createDrawerNavigator()

// const Tab = createBottomTabNavigator();


const Routes = () => {
    return (
        // <NavigationContainer>
        //     <Stack.Navigator 
        //     // screenOptions={{presentation:'transparentModal'}}
        //     // screenOptions={{presentation:'containedTransparentModal'}}
        //     // screenOptions={{presentation:'fullScreenModal'}}
        //     // screenOptions={{presentation:'card', headerShown:false}}
        //     // initialRouteName={navigationsStrings.HOME} 
        //     screenOptions={{headerShown:true}}
        //     >
        //         {MainStack(Stack)}
        //     {/* <Stack.Navigator initialRouteName="Home" > */}
        //         {/* <Stack.Screen name={navigationsStrings.PROFILE} component={Profile } />
        //         <Stack.Screen options={{title:'MyUpdatedHome'}} name={navigationsStrings.HOME} component={Home } />
        //         <Stack.Screen name={navigationsStrings.EXPLORE} component={Explore } /> */}

        //         {/* <Stack.Screen name="Home" component={Home } />
        //         <Stack.Screen name="Profile" component={Profile } />
        //         <Stack.Screen name="Explore" component={Explore } /> */}
        //     </Stack.Navigator>
        // </NavigationContainer>

        <NavigationContainer>
            <Drawer.Navigator>
                {MainStack(Stack)}
                <Drawer.Screen name={navigationsStrings.HOME} component={Home} />
                <Drawer.Screen name={navigationsStrings.PRODUCT_DETAILS} component={ProductDetails} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Routes;



