//rnfe
import React from 'react'
import { View, Text, Button, Pressable, Alert } from 'react-native'
import style from './style'
import navigationsStrings from '../../constants/navigationsStrings'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../Components/Header'

//navigation: Bu prop, React Native uygulamasında ekranlar arasında gezinmek için yöntemler sağlayan navigasyon nesnesini ifade eder.

//route: Bu prop, geçerli ekran hakkında adı, parametreleri ve gezinme geçmişi gibi bilgileri içeren geçerli rota nesnesini temsil eder.
const Profile = ({ navigation, route }) => {
  const { title } = route.params

  const goToScreen = () => {
    navigation.navigate(navigationsStrings.EXPLORE, { title })
  }

  // const {navigation, route} = props
  console.log('routes', route.params.title)
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.header}>
          <Header
            goBack={() => {
              navigation.goBack(), Alert.alert('I use top one go back button') 
            }}
            text="Profile Screen"
            navigation={navigation}
          />
        </View>
        <View style={style.content}>
          <Text>PROFILE</Text>
          <Text >This is Params data: {title}</Text>
          <Pressable
            onPress={(goToScreen)}>
            <Text style={{ color: 'blue', fontSize: 20 }}>Go To Explore </Text>
          </Pressable >

          <Pressable
            onPress={() => navigation.goBack()}>
            <Text style={{ color: 'blue', fontSize: 20 }}> Go Back </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Profile;