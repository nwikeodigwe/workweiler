import { Button } from "@/components";
import { FcGoogle } from "react-icons/fc";
import useFirebase from "@/provider/firebase/context";
import { Auth } from "../../utils";

const SignInWithGoogle = () => {
  const { auth } = useFirebase();
  const authenticate = new Auth(auth);
  const login = () => {
    return authenticate.loginWithGoogle();
  };
  return (
    <Button
      onClick={() => login()}
      variant="outline"
      className="btn-full border-gray-300"
    >
      <FcGoogle className="text-xl" />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default SignInWithGoogle;
