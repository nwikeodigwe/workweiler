import { FaRegBookmark } from "react-icons/fa";
import { TbCancel } from "react-icons/tb";

export const Save = () => {
  return (
    <>
      <button className="">
        <TbCancel className="text-2xl" />
      </button>
      <button>
        <FaRegBookmark className="text-2xl" />
      </button>
    </>
  );
};
