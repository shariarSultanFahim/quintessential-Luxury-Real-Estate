import  { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [userName, setUserName] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [currentPhoto, setCurrentPhoto] = useState('https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg');
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
           setCurrentPhoto(currentUser.photoURL);
          } else {
            setUser(null)
          }
          setLoading(false);
        });

        return ()=>{
          unsubscribe()
        }
  },[])
    console.log(user);  
    

    const authInfo={
        isLoading,
        registerUser,
        loginUser,
        user,
        userName,
        setUserName,
        logOut,
        setUser,
        googleLogin,
        githubLogin,
        currentPhoto, 
        setCurrentPhoto
    }
    
    

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
