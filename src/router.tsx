import { Routes, Route } from "react-router";
import Layout from "./components/common";
import Home from "./home";
import Guest from "./guest";
import AuthLayout, { Login, Register } from "./auth";

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
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
