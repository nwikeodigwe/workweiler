import type { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  type Auth,
  signOut,
} from "firebase/auth";

interface RegisterProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

class AuthUtil {
  private auth: Auth;
  constructor(auth: Auth) {
    this.auth = auth;
  }

  async register({ email, password, firstname, lastname }: RegisterProps) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      await updateProfile(userCredentials.user, {
        displayName: `${firstname} ${lastname}`,
      });
      return this.login(email, password);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async login(email: string, password: string) {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredentials;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      const credentials = GoogleAuthProvider.credentialFromResult(result);
      const token = credentials?.accessToken;
      const user = result.user;

      console.log(credentials);
      return { token, user };
    } catch (err) {
      console.error(err);
      return GoogleAuthProvider.credentialFromError(err as FirebaseError);
    }
  }

  async reset({ email }: { email: string }) {
    console.log(email);
    try {
      const useCredentials = await sendPasswordResetEmail(this.auth, email);
      console.log(useCredentials);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default AuthUtil;
