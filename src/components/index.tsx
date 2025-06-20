import { Outlet } from "react-router";
import { Header } from "./common/header";
import { Footer } from "./common/footer";
import Input from "./common/input";
import Button from "./common/button";
import Select from "./common/select";
import Alert from "./common/alert";

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
