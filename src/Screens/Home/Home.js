import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Button, Alert, FlatList, TextInput } from "react-native";
import style from '../Home/style'
import navigationsStrings from "../../constants/navigationsStrings";


const Home = ({ navigation }) => {

    const fruits = ['apple', 'banana', 'orange', 'mango'];
    const epistemology = ["rationalism", "empiricism", "skepticism", "positivism"];
    const ethics = ["utilitarianism", "deontology", "virtue ethics", "social contract theory"];
    const metaphysics = ["substance", "essence", "free will", "determinism"];
    const schools = ["Stoicism", "Existentialism", "Buddhism", "Confucianism"];
    const questions = ["What is the meaning of life?", "Does free will exist?", "What is the nature of reality?", "What is the good life?"];


    const [searchText, setSearchText] = useState('')
    const [newText, setNewText] = useState('')

    const addNewText = () => { 
        setSearchText([...ethics, newText])
        setNewText("")
    }
    

    const filteredEpistemology = epistemology.filter(epis => epis.includes(searchText))

    const goToScreen = () => {
        // navigation.replace(navigationsStrings.PROFILE, { title: 'Subscribe!' })
        // navigation.push(navigationsStrings.PROFILE, { title: 'Subscribe!' })
        navigation.navigate(navigationsStrings.PROFILE, { title: 'Subscribe!' })
        Alert.alert('dsfds')
    }

    console.log(navigation)
    return (
        <View style={style.container}>
            <View>
                <Text>This is "HOME" screen </Text>
                <Pressable>
                    <Text>I'm pressable! Add item</Text>
                </Pressable>
            </View>

            <View style={style.profileButtonContainer}>
                <Button
                    style={style.profileButton}
                    title="Go To Profile"
                    onPress={(goToScreen)}
                //     {
                //     navigation.navigate(navigationsStrings.PROFILE)
                //     Alert.alert('dsfds')
                // }

                // onPress={() => alert('MY FIRST ALER')}
                // disabled={true}
                />
                {/* <View style={style.listItem}>
                    <FlatList
                        data={fruits}
                        renderItem={({ item }) => <Text> {item}</Text>}
                    />
                </View> */}
                {/* <View style={style.Filter}>  
                    <TextInput
                    style={style.TextInput}
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder="Search Something..."
                    
                    />

                    <FlatList 
                    data={filteredEpistemology}
                    renderItem={({item})=> <Text> {item} </Text>}
                    /> 
                    <TextInput
                    style={style.TextInput}
                    onChangeText={setNewText}
                    value={newText}
                    placeholder="Add Something..."
                    
                    />

                    <FlatList 
                    data={filteredEpistemology}
                    renderItem={({item})=> <Text> {item} </Text>}
                    /> 


                <Button 
                title="Add Item"
                onPress={addNewText}
                />
                </View> */}
            </View>
        </View>
    )
}

export default Home;


// onPress{() => { 
//     navigation.navigate(navigationsStrings.PROFILE)
//     Alert.alert('dasdas')
// }}

// onPress {() => { 
//     navigation.navigate(navigationsStrings.PROFILE)
//     Alert.alert('dsfdsf')
// }}


// onPress{() => { 
//     navigation.navigate(navigationsStrings.EXPLORE)
//     Alert.alert('dfsdbfjdhsf')
// }}


// onPress{() => { 
//     navigation.navigate(navigationsStrings.PROFILE)
//     Alert.alert('dsnfdhsfds')
// }}


// onPress{() => { 
//     navigation.navigate(navigationsStrings.PROFILE)
//     Alert.alert('^sdgfkdhsjgds')
// }}

// onPress{()=> { 
//     navigation.navigate(navigationsStrings.HOME)
//     Alert.alert('dgfkjdhsj')
// }}


// const MyFirsOwnTransitionScreen = () => { 
//     navigation.navigate(navigationsStrings.PROFILE  ,{title:'^hsjdfjds'})
//     Alert.alert('dsfndskf')
// }


// const MyFirsOwnTransitionScreen  =() => { 
//     navigation.navigate(navigationsStrings.PROFILE, {title:'gdfdjs'})
// Alert.alert('dsfjsdfk')
// }


//  const MyFirsOwnTransitionScreen = () => { 
//     navigation.navigate(navigationsStrings.PROFILE, {title:'subcsribned!!!'})
//     Alert.alert('fbjsdbfdjsnfdsf')
//  }

{/* <Button 
style={}
title="asdas"
onPress={(MyFirsOwnTransitionScreen)} />
<Button 
style={} 
title='asdas' 
onPress={(MyFirsOwnTransitionScreen)} />

<Button 
style={} 
title="sdfds" 
onPress={(MyFirsOwnTransitionScreen)} />
<Button 
style={}
title="dsfdsf"
onPress={(MyFirsOwnTransitionScreen)}  />
<Button 
style={} 
title="bsdfjs"
onPress={(MyFirsOwnTransitionScreen)}
 />
<Button 
style={} 
title="asdaasd"
onPress={(MyFirsOwnTransitionScreen)} />
<Button  
style={} 
title="shfj"
onPress={(MyFirsOwnTransitionScreen)} />
<Button
style={}
title="jashd"
onPress={(MyFirsOwnTransitionScreen)} />
<Button 
style={} 
title="dsfds" 
onPress={(MyFirsOwnTransitionScreen)} />
<Button
style={} 
title="sdfds"
onPress={(MyFirsOwnTransitionScreen)} />
<Button 
style={}
title="sdfjhdsf"
onPress={(MyFirsOwnTransitionScreen)}
 />
<Button 
style={}
title="dfds"
onPress={(MyFirsOwnTransitionScreen)}  />
<Button 
style={}
title="dfds"
onPress={(MyFirsOwnTransitionScreen)} /> */}
