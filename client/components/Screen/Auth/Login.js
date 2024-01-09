import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity, Button } from "react-native";
import Input from "../../Form/Input";
import Buttons from "../../Form/Button"
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthContext } from "../../../context/authContext";



const Login = ({ navigation }) => {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const [state, setState] = useContext(AuthContext)

    async function btnpress() {

        try {
            if (!email || !pass) {
                console.log("fill all");
                Alert.alert("Fill all");
            }

            const { data } = await axios.post("http://192.168.0.207:3000/login", { email, pass });
            setState(data);
            console.log(state);

            await AsyncStorage.setItem('@auth', JSON.stringify(data));
            alert(data.message);
            navigation.navigate("Home");
            console.log("axcios data" + data);

            // console.log({ email, pass });
        }

        catch (error) {
            alert(error.response.data.message)
            console.log(error);
            console.log(error.response.data.message);
        }

    }

    const get = async () => {
        const value = await AsyncStorage.getItem('@auth');
        console.log(value);
    }

    get();

    return (
        <View style={styles.container}>
            <Text style={styles.head}>LOGIN</Text>

            <Input
                inputMode="email-address"
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
            <Buttons
                btnpress={btnpress}

            />

            <StatusBar style="auto" />
            {/* <Text>{JSON.stringify({ name, email, pass }, null, 4)}</Text> */}
            <Text>Don't have an account {""}
                <Text style={styles.link} >Register</Text>
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

        textAlign: "center",


    },
    link: {
        color: "red"
    }
});

export default Login