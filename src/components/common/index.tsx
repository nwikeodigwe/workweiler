import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";
import Input from "./input";
import Button from "./button";
import Select from "./select";
import Alert from "./alert";

const Layout = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export { Input, Button, Select, Alert };
export default Layout;
