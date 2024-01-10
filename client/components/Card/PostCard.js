import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const PostCard = ({ posts }) => {
    console.log(posts?.id);

    return (
        <View>
            <View>
                <Text style={styles.header}> My Total Posts{": "}{posts?.length}</Text>

                {posts?.map((post, i) => (
                    <View key={i} style={styles.card}>
                        <Text style={styles.title}> Title : {post?.title}</Text>
                        <Text style={styles.disc}>  {post?.discription}</Text>
                        <View style={styles.user}>
                            <Text style={{ textTransform: "capitalize" }} ><FontAwesome name='user' color="orange" />
                                {""} {post?.postedBy.name}</Text>
                            <Text><FontAwesome name='clock-o' color="orange" />{" "}{moment(post?.createdAt).format("DD:MM:YYYY")}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignSelf: "center",
        fontWeight: "500",
        fontSize: 30,
        textTransform: "uppercase",
        margin: 20
    },
    card: {
        backgroundColor: "#ffffff",
        margin: 10,
        padding: 10,
        // textTransform: "capitalize",
        borderRadius: 20,
        borderColor: "gray",
        borderWidth: 1,
    },
    user: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingTop: 20
    },
    title: {
        fontWeight: "500",
        fontSize: 20,
        textTransform: "uppercase",
        alignSelf: "center",
        marginBottom: 10
    },
    disc: {
        textTransform: "capitalize",

    }
})

export default PostCard