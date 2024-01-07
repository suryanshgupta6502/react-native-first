import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
import axios from "axios"
import Input from "../../Form/Input";
import Button from "../../Form/Button";


const Register = ({ navigation }) => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    async function btnpress() {
        if (!name || !email || !pass) {
            console.log("fill all");
            Alert.alert("Fill all");
        }

        const { data } = await axios.post("http://192.168.0.207:3000/register", { name, email,pass });
        alert(data.message);

        console.log({ name, email, pass });


    }

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Registration</Text>
            <Input
                input="Name"
                value={name}
                setvalue={setname} />
            <Input
                imputMode="email-address"
                input="Email"
                value={email}
                // autoComplete="email"
                setvalue={setemail}
            />
            <Input
                secureTextEntry={true}
                input="Password"
                value={pass}
                setvalue={setpass} />
            <Button
                btnpress={btnpress} />
            <StatusBar style="auto" />
            {/* <Text>{JSON.stringify({ name, email, pass }, null, 4)}</Text> */}
            <Text>Alredy have an account

                <Text style={styles.link} onPress={() => navigation.navigate("Login")} >LOGIN</Text>

            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AC87C5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontWeight: "bold", fontSize: 30, color: "#756AB6",

    },
    button: {
        backgroundColor: "black",
        textAlign: "center",
        width: 70,
        borderRadius: 50,
        marginLeft: 5


    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,

        textAlign: "center"


    },
    link: {
        color: "red"
    }
});

export default Register