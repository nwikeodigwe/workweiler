import type { FirebaseError } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, type Auth } from "firebase/auth";

const signInWithGoogle = async (auth: Auth) => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);
    const token = credentials?.accessToken;
    const user = result.user;

    console.log(credentials);
    return { token, user };
  } catch (err) {
    console.error(err);
    return GoogleAuthProvider.credentialFromError(err as FirebaseError);
  }
};

export default signInWithGoogle;
