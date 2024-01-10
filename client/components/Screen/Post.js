import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FooterMenu from './Common/FooterMenu'
import axios from 'axios'

const Post = ({ navigation }) => {

    const [title, settitle] = useState("")
    const [discription, setdisc] = useState("")

    const handlepost = async() => {

        // console.log(`title is ${title} and discription is ${discription}`)

        try {
            if (!title||!discription) {
                // alert("no")
            }
            
            const { data } = await axios.post("http://192.168.0.207:3000/new-post",{title,discription});
            console.log(data);
            alert(data?.message);
            navigation.navigate("Home");

        } catch (error) {
            alert(error.response.data.message)
        }
    }



    return (
        <View style={styles.container}>
            <ScrollView>

                <View>
                    <Text style={styles.heading}>Create A Post</Text>
                    <TextInput
                        placeholder="Title of Post"
                        value={title}
                        onChangeText={(text) => settitle(text)}
                        style={styles.input} />
                    <TextInput
                        placeholder="Discription of Post"
                        value={discription}
                        onChangeText={(text) => setdisc(text)}
                        multiline={true} numberOfLines={6} style={styles.input} />
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.button} onPress={handlepost} >
                        <Text style={styles.btntext} >New Post</Text>
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
        justifyContent: "flex-end",
    },
    heading: {
        fontSize: 20,
        fontWeight: "500",
        margin: 20,
        alignSelf: "center",
        textTransform: "uppercase"
    }
    , input: {
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        margin: 10,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    button: {
        paddingHorizontal: 50,
        margin: 20,
        borderRadius: 20,
        backgroundColor: "#112D4E"
    },
    btntext: {
        color: "white",
        margin: 20,
        fontSize: 20,
        textTransform: "uppercase"
    }

})

export default Post