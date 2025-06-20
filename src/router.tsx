import { Routes, Route } from "react-router";
import Layout from "@/components";
import Home from "./home";
import Guest from "./guest";
import Post from "./post";
import AuthLayout from "./features/auth/pages";
import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/register";
import Reset from "./features/auth/pages/reset";

// import AppLayout from "./components/common";
// import { Home } from "./components/home/index";
// import CreateAndRedirect from "./components/home/createAndRedirect";
// import NotFound from "./components/common/notFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="guest" element={<Guest />} />
        <Route path="post" element={<Post />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />
      </Route>
    </Routes>
  );
};

export default Router;
