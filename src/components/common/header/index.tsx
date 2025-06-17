import { Link } from "react-router";
import Input from "../input";
// import { IoSearchOutline } from "react-icons/io5";
import { Notification, Chat, Profile, Menu, Info, Language } from "./widgets/";

export const Header = () => {
  return (
    <section className="border-b-1 border-jet/15 bg-white">
      <div className="container flex py-5 items-center justify-between">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-5 items-center">
            <Input
              name="search"
              type="text"
              variant="rounded"
              placeholder="Search"
            />
            <Notification />
            <Chat />
            <Profile />
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 border-r border-gray-300">
              <Menu />
            </div>
            <Language />
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};
