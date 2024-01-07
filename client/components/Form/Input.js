import { Text, StyleSheet, View, TextInput,TouchableOpacity } from 'react-native'

function Input({ input, secureTextEntry, keyboardType, value, setvalue, autoComplete }) {
    return (
        <View>
            <Text style={styles.text}>{input}</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoComplete={autoComplete}
                value={value}
                autoCorrect={false}
                onChangeText={(text) => setvalue(text)}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#756AB6",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15

    },
    input: {
        backgroundColor: "#FFE5E5",
        width: 300,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5


    }
})

export default Input;