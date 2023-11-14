import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { User } from "firebase/auth";

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};