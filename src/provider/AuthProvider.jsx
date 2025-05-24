import React, { createContext, useEffect, useState } from 'react';
import app from '../components/firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext =  createContext();
import { signInWithPopup } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
};

    const updateUser = (name, photo) => {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });
    };

const logOut = () =>{
    return signOut(auth);
}

const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
};

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
}


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
    setLoading(false);
});
return () =>{
    unsubscribe();
};
},[]);

    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn,
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;