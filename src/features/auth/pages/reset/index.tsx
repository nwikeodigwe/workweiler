import React from "react";
import { Link } from "react-router";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import useFirebase from "@/provider/firebase/context";
import { Button, Alert, Input } from "@/components";
import { Back } from "../../components/back";
import { Auth } from "../../utils";
import SignInWithGoogle from "../login/signinWithGoogle";

interface Inputs {
  email: string;
  password: string;
}

const Index = () => {
  const [error, setError] = React.useState<null | string>();
  const { auth } = useFirebase();
  const authenticate = new Auth(auth);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const resetUser: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await authenticate.login(data.email, data.password);
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(
        "An error occured while trying to reset you password. Please try again."
      );
    }
  };

  return (
    <div className="col-span-7 flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-sm space-y-8">
        <div className="flex flex-col gap-2">
          <Back />
          <h2 className="text-2xl tracking-wide font-semibold">
            Reset Password
          </h2>
          <p>
            Please enter your email and you should recieve a password reset
            email
          </p>
        </div>

        <form onSubmit={handleSubmit(resetUser)} className="space-y-6">
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

          <Button
            variant="curved"
            className="btn-full justify-center font-semibold"
          >
            Reset password
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
        <SignInWithGoogle />
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
