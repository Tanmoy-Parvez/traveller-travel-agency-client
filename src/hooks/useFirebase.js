import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase() // called initialized firebase

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider(); // get google provider
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);


    // google sign in method
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // user log out method
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [])


    // return all the functions
    return {
        googleSignIn,
        logOut,
        user,
        error,
        isLoading,
    };
}


export default useFirebase;