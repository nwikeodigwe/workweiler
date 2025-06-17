import Listings from "./listings";
import { Search } from "./search";

const Index = () => {
  return (
    <section className="min-h-svh pb-16">
      <div className="container flex flex-col gap-5">
        <div className="border-b-1 border-jet/15 mt-5">
          <h2 className="w-fit text-xl py-3 border-b-2 border-gold">
            Search Jobs
          </h2>
        </div>
        <Search />
        <Listings />
      </div>
    </section>
  );
};

export default Index;
