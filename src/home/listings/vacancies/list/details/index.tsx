import { Content } from "./content";
import { Header } from "./header";
import { About } from "./about";
import { Info } from "./info";

export const Details = () => {
  return (
    <div className="flex flex-col col-span-8 h-full  rounded-2xl shadow-xl bg-white">
      <Header />
      <Content />
      <Info />
      <About />
    </div>
  );
};
