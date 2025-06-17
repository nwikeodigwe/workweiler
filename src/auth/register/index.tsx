import { Back } from "../back";
import { Link } from "react-router";
import { Alert, Button, Input } from "../../components/common";
import useFirebase from "@/provider/firebase/context";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { IoCheckmarkCircle } from "react-icons/io5";
import React from "react";
import register from "../functions/register";

interface Inputs {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Index = () => {
  const [error, setError] = React.useState<null | string>();
  const { auth } = useFirebase();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const registerUser: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await register({
        auth,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      });
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <div className="col-span-7 flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-xl space-y-8 my-15">
        <div className="flex flex-col gap-2">
          <Back />
          <h2 className="text-2xl tracking-wide font-semibold">Welcome back</h2>
        </div>
        <form onSubmit={handleSubmit(registerUser)} className="space-y-6">
          {error && <Alert variant="error">{error}</Alert>}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-500" htmlFor="email">
                First Name <span>*</span>
              </label>
              <Controller
                control={control}
                name="firstname"
                rules={{
                  required: true,
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} className="w-full p-2 border rounded" />
                  );
                }}
              />
              {errors.firstname && (
                <span className="text-xs text-red-500">
                  First name is required.
                </span>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-500" htmlFor="email">
                Last Name <span>*</span>
              </label>
              <Controller
                control={control}
                name="lastname"
                rules={{
                  required: true,
                }}
                render={({ field }) => {
                  return (
                    <Input {...field} className="w-full p-2 border rounded" />
                  );
                }}
              />
              {errors.lastname && (
                <span className="text-xs text-red-500">
                  Last name is required.
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-500" htmlFor="password">
              Email Address
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
              <span className="text-xs text-red-500">Email is required.</span>
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
              <span className="text-xs text-red-500">
                Password is required.
              </span>
            )}
            <div className="text-left">
              <ul className="text-sm space-y-1 list-icon">
                <li className="flex items-center gap-2">
                  <IoCheckmarkCircle />
                  <p>At least 10 characters</p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkCircle />
                  <p>Number, special character (e.g.,!@$%^&*+_#()-)</p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkCircle />
                  <p>Both uppercase and lowercase letters</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="terms" />
            <p className="text-sm">
              By checking this box, you agree to our Terms and Conditionsand
              Privacy Policy.
            </p>
          </div>

          <Button
            variant="curved"
            className="btn-full justify-center font-semibold"
          >
            Create account
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Button variant="outline" className="btn-full border-gray-300">
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/auth" className="text-gray-600 hover:text-gray-800">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Index;
