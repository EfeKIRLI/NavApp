import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator(); // fonksiyonu, yığın tabanlı bir navigasyon sistemi oluşturur.

// const  HomeScreen = () => {
//   return (
//     <View style={{ flex: 1, flexDirection:'row', alignItems: 'center', justifyContent:'center', marginHorizontal:'20%' }}>
//       <Text>Home Screen</Text>
//       {/* <ProfileScreen/> */}
//     </View>
//   );
// }



// const ProfileScreen = () => { 
//   return ( 
//     <View style={{ flex: 1, flexDirection:'row', alignItems: 'center', justifyContent:'center'}}> 
//       <Text> Go to Profile </Text>
//     </View>
//   )
// }

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >  
      <Stack.Screen name="Profile" component={ProfileScreen} />  
        <Stack.Screen name="Home" component={HomeScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;