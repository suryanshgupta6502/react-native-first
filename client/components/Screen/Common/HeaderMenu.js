import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { AuthContext } from '../../../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HeaderMenu = () => {

    const [state, setState] = useContext(AuthContext)
    const logout = async () => {
        setState({ user: null, token: "" });
        await AsyncStorage.removeItem("@auth");
        alert("logout succesfull")
    }

    return (
        <View>
            <TouchableOpacity onPress={logout} >
                <Text />
                <FontAwesome style={styles.icon} color={"red"} name="sign-out"  />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        fontSize: 30,
        alignSelf:"center",
        borderRadius:10,
        width:40

    },
    button: {
        backgroundColor: "#ffffff",
        width: 85,
        flexDirection: "column",
        alignSelf: "center",
        borderRadius: 10
    }
})

export default HeaderMenu