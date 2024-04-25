import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        // flexDirection:'row',
        flex: 1,
        flexDirection:'column',
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
        backgroundColor:'yellow'


    },

    profileButton: {
        backgroundColor: '#f0f8ff',
        color: 'red',
        borderRadius:5
    },
    listItem: { 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },

    TextInput:{ 
       backgroundColor:'#fff',
       height:40,
       width:'auto',
       borderRadius:10
    },
    Filter:{
        // flexDirection:'row-reverse',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
        // justifyContent:'space-around'

    }


})

export default style;