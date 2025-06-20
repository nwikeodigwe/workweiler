import {
  createUserWithEmailAndPassword,
  updateProfile,
  type Auth,
} from "firebase/auth";
import login from "./login";

interface Props {
  auth: Auth;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
const register = async ({
  auth,
  email,
  password,
  firstname,
  lastname,
}: Props) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredentials.user, {
      displayName: `${firstname} ${lastname}`,
    });
    return login({ auth, email, password });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default register;
