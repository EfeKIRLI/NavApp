import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        // flexDirection:'row',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ADD8E6',


    },

    profileButton: {
        backgroundColor: '#f0f8ff',
        color: 'red',
        borderRadius: 15,
        // marginBottom:40


    },

    profileButtonContainer: {
        width: '88%',
        height: 100,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        // justifyContent:'',
        backgroundColor: 'red',
        marginHorizontal: 10,
        marginTop: 20
    }
    ,
    listItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },

    TextInput: {
        backgroundColor: '#fff',
        height: 40,
        width: 'auto',
        borderRadius: 10
    },
    Filter: {
        // flexDirection:'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        // justifyContent:'space-around'

    }


})

export default style;