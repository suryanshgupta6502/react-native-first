import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import FooterMenu from './Common/FooterMenu'

const Home = () => {

    const [state] = useContext(AuthContext)
    return (
        <View style={styles.container} >
            <Text >Home</Text>
            <Text>{JSON.stringify(state, null, 4)}</Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }} >
                <FooterMenu />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    }
})

export default Home