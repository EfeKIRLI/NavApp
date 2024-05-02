// rfne

import { View, Text } from 'react-native'
import React from 'react'

const EditProfile = ({navigation, route}) => {
  alert(route.params.user)
  return (
    <View>
      <Text>EditProfile</Text>
    </View>
  )
}

export default EditProfile