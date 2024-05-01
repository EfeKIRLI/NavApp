import { View, Text } from 'react-native'
import React from 'react'
import style from './Home/style'
import Header from '../Components/Header'

const ProductDetails = ({ navigation }) => {
    return (
        <View style=
            {{
                flex: 1,
                flexDirection:'column',
                backgroundColor: '#FFF2D7',
                justifyContent: 'flex-start',
                // alignItems:'flex-start'
            }} >
            <Header />
            <View style={{ margin: 22, alignItems:'center' }} >
                <Text style={{ fontSize: 24, }} >ProductDetails</Text>
            </View>
        </View>
    )
}

export default ProductDetails;