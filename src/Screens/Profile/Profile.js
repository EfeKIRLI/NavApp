//rnfe
import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

//navigation: Bu prop, React Native uygulamasında ekranlar arasında gezinmek için yöntemler sağlayan navigasyon nesnesini ifade eder.

//route: Bu prop, geçerli ekran hakkında adı, parametreleri ve gezinme geçmişi gibi bilgileri içeren geçerli rota nesnesini temsil eder.
const Profile = ({navigation,route}) => {
  const {title} = route.params

  // const {navigation, route} = props
  console.log('routes', route.params.title)
  return (
    <View style={style.container}>
      <Text>PROFILE</Text>
    </View>
  )
}

export default Profile;