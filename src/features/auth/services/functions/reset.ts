import { sendPasswordResetEmail, type Auth } from "firebase/auth";

interface Props {
  auth: Auth;
  email: string;
  password: string;
}
const Reset = async ({ auth, email }: Props) => {
  console.log(email);
  try {
    const useCredentials = await sendPasswordResetEmail(auth, email);
    console.log(useCredentials);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default Reset;
