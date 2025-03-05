import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from './../firebase/firebase.init';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [users,setUsers]=useState(null)
    const [loading,setLoading]=useState(true)

    // register
    const registerUser=(email,password)=>{
            setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // delete: incomplete-> need admin privilege?
    const deleteUserAccount=()=>{
       setLoading(true)
        return deleteUser(auth.currentUser)
    }

    //sign in
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    } 

    // PASS everything for AUTHENTICATION 
    const authInfo={
        name:"PASA",
        email:"Pasa@paki.com",
        users,
        setUsers,
        registerUser,
        deleteUserAccount,
        loginUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;