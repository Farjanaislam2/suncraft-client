import React, { createContext } from 'react';
import { authInfo } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from "../component/firebase/firebase.config"
import { useState } from 'react';


export const AuthContext =createContext();
const auth =getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)


    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo ={
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;