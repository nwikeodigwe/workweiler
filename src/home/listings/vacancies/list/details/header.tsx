import { BsCashStack } from "react-icons/bs";
import { Info } from "../info";
import { Save } from "../save";
import Button from "../button";

export const Header = () => {
  return (
    <div className="flex flex-col py-7 px-5 gap-4 border-b-2 border-jet/10">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="h-10 w-20 border-1 p-2"></span>
          <h2 className="text-2xl font-[500] max-w-[300px] tracking-wide">
            Director of Finance & Accounting
          </h2>
        </div>
        <div className="col-span-2 flex items-center gap-5 justify-end">
          <Save />
        </div>
      </div>
      <Info className="text-xs font-[500]" />
      <div className="flex items-center justify-between">
        <div className="flex w-fit items-center gap-2 p-1 bg-jet/5">
          <span>
            <BsCashStack />
          </span>
          <p className="text-xs flex-none font-[500]">
            $120,000-$500,000 Per Year
          </p>
        </div>
        <Button className="btn-wide" />
      </div>
    </div>
  );
};
