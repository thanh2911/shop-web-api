import React, {useContext , createContext , useState , useEffect} from 'react' ;
import ProductApi from './api/ProductApi';
import CategoryApi from './api/CategoryApi';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  
  import { auth } from './firebase'


export const GlobalState = createContext();

export const DataProvider = ({children}) => {

    const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);


    const state = { 
        productApi : ProductApi(),
        categoryApi : CategoryApi(),
    };

    return (
        <GlobalState.Provider value={{state ,user ,logIn , signUp , logOut ,googleSignIn}}>
            {children}
        </GlobalState.Provider>
    )
}

export function useUserAuth() {
    return useContext(GlobalState);
  }

