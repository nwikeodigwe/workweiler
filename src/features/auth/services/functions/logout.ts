import { signOut, type Auth } from "firebase/auth";

const logout = (auth: Auth) => {
  signOut(auth)
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default logout;
