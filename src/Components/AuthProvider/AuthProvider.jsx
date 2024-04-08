import  { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider,onAuthStateChanged, signOut, GithubAuthProvider, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [userName, setUserName] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const registerUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
       
    }
    const loginUser = (email,password) =>{
       return signInWithEmailAndPassword(auth,email,password)
        
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
           setUser(currentUser);
           setUserName(currentUser.displayName);
          } else {
            setUser(null)
          }
          setLoading(false);
        });

        return ()=>{
          unsubscribe()
        }
  },[])


    const authInfo={
        isLoading,
        registerUser,
        loginUser,
        user,
        userName,
        logOut,
        setUser,
        googleLogin,
        githubLogin
    }
    
    

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
