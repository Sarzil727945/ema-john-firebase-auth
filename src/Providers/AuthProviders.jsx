import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';

const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {

     const [user, setUser] = useState(null)

     const singUp = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const singIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password)
     }

     const logOut = () =>{
          return signOut(auth)
     }

     useEffect(()=>{
         const currenUserActive = onAuthStateChanged(auth, currenUser => {
          setUser(currenUser)
          })

          return(()=>{
               currenUserActive()  
          })
     },[])
     const authInfo ={
          user,
          singUp,
          singIn,
          logOut,
     }
     return (
          <AuthContext.Provider value={authInfo}>
              {children} 
          </AuthContext.Provider>
     );
};

export default AuthProviders;