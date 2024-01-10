import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { PostContext } from "../../context/postsContext"
import FooterMenu from './Common/FooterMenu'
import PostCard from '../Card/PostCard'

const Home = () => {

    const [state] = useContext(AuthContext)
    const [posts] = useContext(PostContext)

    const data=JSON.stringify(posts);

    return (
        <View style={styles.container} >
            <ScrollView>
                <PostCard posts={posts} />
                <Text>{JSON.stringify(posts, null, 4)}</Text>
            </ScrollView>



            <View>
                <FooterMenu />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        // margin:10
    }
})

export default Home