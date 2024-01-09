import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useNavigation, useRoute} from "@react-navigation/native"

const FooterMenu = () => {

    const route=useRoute();
    // console.log(route);

    const navigator=useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>navigator.navigate("Home")}>
                <FontAwesome name='home' style={styles.icon} color={route.name==="Home"&& "red"} />
                <Text style={{ alignSelf: "center" }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigator.navigate("Post")}>
                <FontAwesome name='plus-square' style={styles.icon} color={route.name === "Post" && "red"} />
                <Text style={{ alignSelf: "center" }}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigator.navigate("About")}>
                <FontAwesome name='info-circle' style={styles.icon} color={route.name === "About" && "red"}  />
                <Text style={{ alignSelf: "center" }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigator.navigate("Account")}>
                <FontAwesome name='user' style={styles.icon} color={route.name === "Account" && "red"}  />
                <Text style={{ alignSelf: "center" }}>Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        fontSize: 30,
        alignSelf: "center",
    },
    button: {
        backgroundColor: "#ffffff",
        width: 85,
        flexDirection:"column",
        alignSelf:"center",
        borderRadius:10
    }
})

export default FooterMenu;