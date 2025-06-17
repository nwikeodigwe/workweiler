import { Outlet } from "react-router";
import Login from "./login";
import Register from "./register";
import image from "@/assets/job-hunt.svg";

export default function Index() {
  return (
    <section className="h-svh">
      <div className="grid grid-cols-10 h-full">
        <div className="col-span-3 flex flex-col  h-full bg-gold text-white  p-10">
          <div className="flex flex-col gap-5">
            <p>Imploy</p>
            <h2 className="text-2xl font-semibold tracking-wide">
              Explore Exclusive Jobs, Apply in Seconds!
            </h2>
            <p className="tracking-wide">
              Apply for jobs made for you and achieve your career goals with
              Imploy
            </p>
          </div>
          <div className="mt-10">
            <img src={image} alt="job-hunt" />
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
}

export { Login, Register };
