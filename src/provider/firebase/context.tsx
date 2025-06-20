import React from "react";
import { FirebaseContext } from "./index";

const useFirebase = () => {
  const context = React.useContext(FirebaseContext);
  if (!context)
    throw new Error("useFirebase must be used within FirebaseProvider");
  return context;
};

export default useFirebase;
