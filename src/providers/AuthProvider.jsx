import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { createContext, useState } from "react";
import auth from './../firebase/firebase.init';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // register
    const registerUser=(email,password)=>{
            setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // delete
    const deleteUserAccount=()=>{
       setLoading(true)
        return deleteUser(auth.currentUser)
    }

    // PASS everything for AUTHENTICATION 
    const authInfo={
        name:"PASA",
        email:"Pasa@paki.com",
        user,
        setUser,
        registerUser,
        deleteUserAccount

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;