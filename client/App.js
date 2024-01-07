import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './context/authContext'
import ScreenMenu from './components/Screen/ScreenMenu'


const App = () => {

  return (

    <NavigationContainer>
      <AuthProvider>
        <ScreenMenu/>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App