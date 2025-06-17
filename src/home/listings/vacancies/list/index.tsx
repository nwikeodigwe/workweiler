import { Card } from "./card";

export const List = () => {
  return (
    <div className="col-span-4 h-full border-1 border-jet/20 shadow-xl rounded-2xl overflow-scroll bg-white">
      <ul className="divide-y divide-jet/20">
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  );
};
