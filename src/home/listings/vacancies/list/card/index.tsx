import { BsCashStack } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import Button from "../button";
import { Save } from "../save";
import { Info } from "../info";

export const Card = () => {
  return (
    <div className="flex flex-col px-5 py-7 gap-3">
      <div className="grid grid-cols-5 justify-between items-center">
        <div className="col-span-3 flex items-center gap-1">
          <span className="h-10 w-20 border-1"></span>
          <p className="upppercase text-sm">New!</p>
        </div>
        <div className="col-span-2 flex items-center gap-5 justify-end">
          <Save />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-[500] text-jet tracking-wide">
          Director of Finance and Accounting
        </h2>
        <Info className="text-xs" />
      </div>
      <div className="flex items-center gap-3 mt-2">
        <ul className="flex flex-wrap items-center gap-2 font-[500]">
          <li className="flex w-fit items-center gap-2 p-1 bg-jet/5">
            <span>
              <BsCashStack />
            </span>
            <p className="text-xs flex-none">$120,000-$500,000 Per Year</p>
          </li>
          <li className="flex w-fit flex-nowrap items-center gap-2 p-1 bg-jet/5">
            <span>
              <BsBriefcase />
            </span>
            <p className="text-xs flex-none">Full-time</p>
          </li>
          <li className="flex w-fit flex-nowrap items-center gap-2 p-1 bg-jet/5">
            <span>
              <BsBriefcase />
            </span>
            <p className="text-xs">Employee</p>
          </li>
        </ul>
      </div>
      <Button className="btn-full" />
    </div>
  );
};
