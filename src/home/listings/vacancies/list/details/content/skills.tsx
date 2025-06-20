import { CgInfo } from "react-icons/cg";
import { MdOutlineAdd } from "react-icons/md";
import { Button } from "@/components";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-[500]">Skills</h2>
        <span>
          <CgInfo className="text-xl" />
        </span>
      </div>
      <ul className="flex flex-wrap items-center gap-3">
        <li className="px-2 py-1 bg-jet/5 text-xs border-1 border-jet/10 rounded-sm">
          Accounting
        </li>
        <li className="px-2 py-1 bg-jet/5 text-xs border-1 border-jet/10 rounded-sm">
          Analysis Skills
        </li>
        <li className="px-2 py-1 bg-jet/5 text-xs border-1 border-jet/10 rounded-sm">
          Balance Sheet
        </li>
        <li className="px-2 py-1 bg-jet/5 text-xs border-1 border-jet/10 rounded-sm">
          Budgeting
        </li>
        <li className="px-2 py-1 bg-jet/5 text-xs border-1 border-jet/10 rounded-sm">
          Certified Public Accountant (CPA)
        </li>
      </ul>
      <Button className="hover:bg-gold/10">
        <MdOutlineAdd />
        <span className="text-sm">show more</span>
      </Button>
    </div>
  );
};
