import { createContext, useState, useEffect } from "react";
import { auth } from '../firebase-config'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const UserAuthContext = createContext()

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('auth', currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return <UserAuthContext.Provider value={{ signup, login, user, logout, googleSignIn }}>
        {children}
    </UserAuthContext.Provider>
}

// export function useUserAuth() {
//     return useContext(UserAuthContext)
// }





















// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../firebase";

// const userAuthContext = createContext();

// export function UserAuthContextProvider({ children }) {
//   const [user, setUser] = useState({});

//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }
//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }
//   function logOut() {
//     return signOut(auth);
//   }
//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//       console.log("Auth", currentuser);
//       setUser(currentuser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <userAuthContext.Provider
//       value={{ user, logIn, signUp, logOut, googleSignIn }}
//     >
//       {children}
//     </userAuthContext.Provider>
//   );
// }

// export function useUserAuth() {
//   return useContext(userAuthContext);
// }
