import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FooterMenu from './Common/FooterMenu'

const Post = () => {
    return (
        <View style={styles.container}>
            <Text >post</Text>
            <Text >post</Text>
            {/* <Text>{JSON.stringify(contextdata,null,4)}</Text> */}
            <View style={{flex:1,justifyContent:"flex-end"}}>
                <FooterMenu />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    }
})

export default Post