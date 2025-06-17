import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth)
  .then(() => {
    console.log("logged out");
  })
  .catch((error) => {
    console.error(error);
  });
