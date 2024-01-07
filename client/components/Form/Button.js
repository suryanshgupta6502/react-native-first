import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


const Button = ({ btnpress }) => {
    return (
        <View>
            <Pressable
                onPress={btnpress}
                style={styles.button}>
                <Text style={styles.text}>Button</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        margin: 20,
        width: 300,
        borderRadius: 50

    },

    text: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: "center"
    }
}
)

export default Button;