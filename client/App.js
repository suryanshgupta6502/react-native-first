import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './context/authContext'
import { PostProvider } from "./context/postsContext"
import ScreenMenu from './components/Screen/ScreenMenu'


const App = () => {

  return (

    <NavigationContainer>
      <PostProvider>
        <AuthProvider>
          <ScreenMenu />
        </AuthProvider>
      </PostProvider>
    </NavigationContainer>
  )
}

export default App