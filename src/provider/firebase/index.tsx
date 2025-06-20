import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "./config";

interface Props {
  children: React.ReactNode;
}

// Define the context type
interface FirebaseContextType {
  app: ReturnType<typeof initializeApp>;
  auth: ReturnType<typeof getAuth>;
}

// Use the type in React.createContext
const FirebaseContext = React.createContext<FirebaseContextType | undefined>(
  undefined
);

const Provider = ({ children }: Props) => {
  const app = React.useMemo(() => initializeApp(config), []);
  const auth = React.useMemo(() => getAuth(app), [app]);

  const value = { app, auth };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext };
export default Provider;
