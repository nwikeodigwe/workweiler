import { signInWithEmailAndPassword, type Auth } from "firebase/auth";

interface Props {
  auth: Auth;
  email: string;
  password: string;
}
const login = async ({ auth, email, password }: Props) => {
  console.log(email);
  try {
    const useCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(useCredentials);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default login;
