import React from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import { Alert, Input } from "@/components";
import { Button } from "../components";
import { type Inputs } from "./types";

const Index = () => {
  const [error, setError] = React.useState<null | string>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const postJob: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
      setError("Invalid login credentials");
    }
  };
  return (
    <section className="min-h-svh">
      <div className="relative w-3xl mx-auto my-16 p-15 rounded-md shadow-md bg-white">
        <h2 className="absolute right-1/2 translate-x-1/2 -top-3 p-2 rounded-md bg-white shadow-md text-2xl font-semibold">
          Post a Job
        </h2>
        <form
          onSubmit={handleSubmit(postJob)}
          className="flex flex-col gap-5 mt-16"
        >
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Positiom
            </label>
            <Controller
              control={control}
              name="position"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.position && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Company Name
            </label>
            <Controller
              control={control}
              name="company"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.position && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Description
            </label>
            <Controller
              control={control}
              name="position"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.description && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Employment
            </label>
            <Controller
              control={control}
              name="employment"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.employment && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Industry
            </label>
            <Controller
              control={control}
              name="industry"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.industry && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Tags
            </label>
            <Controller
              control={control}
              name="tags"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.tags && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Locations
            </label>
            <Controller
              control={control}
              name="locations"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.locations && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Min Salary
            </label>
            <Controller
              control={control}
              name="minSalary"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.minSalary && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Max Salary
            </label>
            <Controller
              control={control}
              name="maxSalary"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.maxSalary && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Benefits
            </label>
            <Controller
              control={control}
              name="benefits"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.benefits && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Industry
            </label>
            <Controller
              control={control}
              name="how"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.how && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Company Url
            </label>
            <Controller
              control={control}
              name="url"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input {...field} className="w-full p-2 border rounded" />
                );
              }}
            />
            {errors.url && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Company Email
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
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div className="space-y-2">
            {error && <Alert variant="error">{error}</Alert>}
            <label className="text-sm text-gray-500" htmlFor="email">
              Industry
            </label>
            <Controller
              control={control}
              name="logo"
              rules={{
                required: true,
              }}
              render={({ field }) => {
                return (
                  <Input
                    ref={field.ref}
                    name={field.name}
                    type="file"
                    className="w-full p-2 border rounded"
                  />
                );
              }}
            />
            {errors.logo && (
              <span className="text-xs text-red-500">Position is required</span>
            )}
          </div>
          <div>
            <Button variant="curved" className="btn-full text-md">
              Post
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Index;
