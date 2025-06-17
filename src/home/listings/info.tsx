import { Link } from "react-router";
import { FaInfoCircle } from "react-icons/fa";

export const Info = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-4 flex flex-col gap-3">
        <p className="text-xs text-jet/50">
          Part-time vacancies in Utrecht (province)
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm">
            Sort by: relevance - <Link to="/date">date</Link>
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-light">15,000+ vacancies</p>
            <FaInfoCircle className="text-xl text-jet/70" />
          </div>
        </div>
      </div>
      <div className="col-span-8 flex flex-col gap-3"></div>
    </div>
  );
};
