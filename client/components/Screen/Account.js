import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import FooterMenu from './Common/FooterMenu'
import { AuthContext } from '../../context/authContext'
import axios from "axios"

const Account = () => {

    const [state,setstate] = useContext(AuthContext)
    const {token}=state;
    const [name, setname] = useState(state?.user.name)
    const [email, setemail] = useState(state?.user.email)
    const [pass, setpass] = useState()

    const updatedetails =async () => {
        try {
            const { data } = await axios.put("http://192.168.0.207:3000/user-update",{
                name,email,pass
            })
            
            console.log("without parse",data);
            const ud=JSON.stringify(data)
            console.log("with json",ud);
            // await setdata()
            setstate({ ...state, user: ud?.updateduser})
            alert(data.message);
            
            console.log("updated data ==>"+name, pass)
        } catch (error) {
            console.log("error in acount update" + error.message);
            alert(error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View >
                    <Image
                        src='https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/my-account-icon.png'
                        style={styles.img} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputtext}>Name:</Text>
                    <TextInput style={styles.inputbox} value={name} onChangeText={(text) => setname(text)} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputtext}>Email:</Text>
                    <TextInput style={styles.inputbox} value={email} readOnly />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputtext}>Password:</Text>
                    <TextInput style={styles.inputbox} textContentType='password' secureTextEntry={true} value={pass} onChangeText={(text) => setpass(text)} />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputtext}>Role</Text>
                    <TextInput style={styles.inputbox} value={state?.user.role} readOnly />
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={updatedetails}>
                        <Text style={styles.btntext} >Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>





            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <FooterMenu />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        margin: 20,
        width: 100,
        height: 100,
        alignSelf: "center"
    },
    input: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,

    },
    inputtext: {
        fontWeight: '900',
        fontSize: 15,

    },
    inputbox: {
        marginLeft: 20,
        fontWeight: '400',
        fontSize: 15,
        backgroundColor: "#ffffff",
        width: "74%",
        paddingLeft: 10
    },
    button: {

        alignItems: "center",
        margin: 50,
        backgroundColor: "black",
        borderRadius: 10,
        width: 250,
    },
    btntext: {
        fontSize: 20,
        fontWeight: "400",
        color: "white",

    }
})

export default Account