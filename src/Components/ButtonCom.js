import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const ButtonCom = () => {
    return (
        <View>
            <TouchableOpacity 
            
            style={style.ProductDetails} >
                <Text style={{ fontSize:16 }} > Product Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonCom


const style = StyleSheet.create({
    ProductDetails: {
        backgroundColor: '#EAD8C0',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})

// ButtonCom.propTypes = {
//     onPress: PropTypes.func
// }