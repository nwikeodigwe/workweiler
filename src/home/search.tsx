import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaFilter } from "react-icons/fa";
import { Button, Select, Input } from "@/components";

export const Search = () => {
  return (
    <section className="flex flex-col gap-5 border-b-1 border-jet/15 pb-5">
      <div className="flex items-center gap-5">
        <Input
          type="text"
          name="search"
          variant="rounded"
          className="w-[350px]"
          placeholder="Find jobs by title, keywords or company"
        />
        <Button variant="rounded">
          <IoSearchOutline className="text-xl" />
          Search
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-3 items-center justify-between">
        <Select variant="rounded">
          <option disabled selected>
            Country
          </option>
          <option value="netherlands">Netherlands</option>
        </Select>
        <Select variant="rounded">
          <option disabled selected>
            City
          </option>
          <option value="netherlands">Netherlands</option>
        </Select>
        <Select variant="rounded">
          <option disabled selected>
            Job Category
          </option>
          <option value="netherlands">Netherlands</option>
        </Select>
        <Select variant="rounded">
          <option disabled selected>
            Industry
          </option>
          <option value="netherlands">Netherlands</option>
        </Select>
        <div className="flex items-center gap-2">
          <Button>
            <IoMdNotifications className="text-xl" />
            <span>Set Job Alert</span>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Button variant="outline-rounded">
          More <HiOutlineAdjustmentsHorizontal />
        </Button>
        <Button variant="outline-rounded">
          <FaFilter /> <span>Apply Filter</span>
        </Button>
        <Button className="rounded-3xl hover:bg-jet/10 transition-all duration-300">
          Clear Filters
        </Button>
      </div>
    </section>
  );
};
