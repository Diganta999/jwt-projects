import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile as firebaseUpdateProfile,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up user with email and password
  const signUpWithPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user with email and password
  const signInUserWithPassword = (email, password) => {
    setLoading(true);
    return firebaseSignInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (profile) => {
    if (auth.currentUser) {
      return firebaseUpdateProfile(auth.currentUser, profile);
    } else {
      return Promise.reject(new Error('No user is currently signed in.'));
    }
  };
  // Sign out user
  const signOutUser = () => {
    setLoading(true);
    return auth.signOut();
  };

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Context value
  const authInfo = {
    user,
    loading,
    signUpWithPassword,
    signInUserWithPassword,
    updateUserProfile,
    setUser,
    signOutUser 
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
