import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Screen/Auth/Register'
import Login from '../Screen/Auth/Login'
import Home from '../Screen/Home'
import { AuthContext } from '../../context/authContext';
import HeaderMenu from './Common/HeaderMenu';
import Post from './Post';
import About from './About';
import Account from './Account';

const ScreenMenu = () => {

    const [state] = useContext(AuthContext)
    const token=state?.token
    const userAuthentication = state?.user && state?.token;

    const stack = createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName='Account' >
            {userAuthentication ? (
                <>

                    <stack.Screen name='Account' component={Account} options={{ headerRight: () => <HeaderMenu /> }} />
                    <stack.Screen name='Home' component={Home} options={{ title: "Full Stack App", headerRight: () => <HeaderMenu /> }} />
                    <stack.Screen name='Post' component={Post} options={{ headerRight: () => <HeaderMenu /> }} />
                    <stack.Screen name='About' component={About} options={{ headerRight: () => <HeaderMenu /> }} />
                </>) : (
                <>
                    {/* <stack.Screen name='Home' component={Home} options={{ title: "Full Stack App",headerRight:()=><HeaderMenu/> }} /> */}
                    <stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                    <stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
                </>
            )}
        </stack.Navigator>
    )
}

export default ScreenMenu