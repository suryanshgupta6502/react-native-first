import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {  createContext, useContext, useEffect, useState } from 'react'

// context
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // global state
    const [state, setState] = useState({
        user: null,
        token: ""
    });

    // geting data at initial time
    useEffect(() => {
        const loaddata = async () => {
            const data = await AsyncStorage.getItem("@auth");
            const logindata =await JSON.parse(data);
            console.log("context data login data " + logindata);
            setState({ ...state, user: logindata?.user, token: logindata?.token })
        }
        loaddata();
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        
        </AuthContext.Provider>
    )

};

export { AuthContext, AuthProvider };

