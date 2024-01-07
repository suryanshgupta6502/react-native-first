import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import FooterMenu from './Common/FooterMenu'
import { AuthContext } from '../../context/authContext'

const Account = () => {

    const [data] = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text >Name:{data?.user.name}</Text>
            <Text >Email:{data?.user.email}</Text>
            <Text >Role:{data?.user.role}</Text>
            {/* <Text>{JSON.stringify(contextdata,null,4)}</Text> */}
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
    footer: {

    }
})

export default Account