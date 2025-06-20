import React from "react";
import { Link, useNavigate } from "react-router";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import useFirebase from "@/provider/firebase/context";
import { Button, Alert, Input } from "@/components";
import { set_user } from "@/features/slices/user";
import { FcGoogle } from "react-icons/fc";
import { Back } from "../../components/back";
import { Auth } from "../../utils/";
import { useDispatch } from "react-redux";
import signInWithGoogle from "../../services/functions/login_with_google";

interface Inputs {
  email: string;
  password: string;
}

const Index = () => {
  const [error, setError] = React.useState<null | string>();
  const { auth } = useFirebase();
  const authenticate = new Auth(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { email: "", password: "" } });

  const LoginUser: SubmitHandler<Inputs> = async (data) => {
    try {
      const { user } = await authenticate.login(data.email, data.password);
      const { uid, email } = user;
      const idToken = await user.getIdToken();
      const accessToken = await user.getIdToken(true);
      const displayName = user.displayName || "";
      const [firstname, lastname] = displayName.split(" ");
      dispatch(
        set_user({ id: uid, accessToken, idToken, email, firstname, lastname })
      );
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="col-span-7 flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-sm space-y-8">
        <div className="flex flex-col gap-2">
          <Back />
          <h2 className="text-2xl tracking-wide font-semibold">Welcome back</h2>
        </div>

        <form onSubmit={handleSubmit(LoginUser)} className="space-y-6">
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Email
            </label>
            <Controller
              control={control}
              name="email"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.email && (
              <span className="text-xs text-red-500">Email is required</span>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-500" htmlFor="password">
              Password
            </label>
            <Controller
              control={control}
              name="password"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input
                    type="password"
                    {...field}
                    className="w-full p-2 border rounded"
                  />
                );
              }}
            />
            {errors.password && (
              <span className="text-xs text-red-500">Password is required</span>
            )}
            <div className="text-right">
              <Link
                to="#"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Forget password?
              </Link>
            </div>
          </div>

          <Button
            variant="curved"
            className="btn-full justify-center font-semibold"
          >
            Sign in
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>
        </form>
        <Button
          onClick={() => signInWithGoogle(auth)}
          variant="outline"
          className="btn-full border-gray-300"
        >
          <FcGoogle className="text-xl" />
          <span>Sign in with Google</span>
        </Button>

        <p className="text-center text-sm text-gray-500">
          New Workweiler?{" "}
          <Link
            to="/auth/register"
            className="text-gray-600 hover:text-gray-800"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Index;
