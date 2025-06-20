import { useNavigate } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";

export const Back = () => {
  const navigate = useNavigate();
  return (
    <span
      onClick={() => navigate(-1)}
      className="flex items-center gap-3 w-fit cursor-pointer"
    >
      <IoMdArrowRoundBack />
      <p>Back to home</p>
    </span>
  );
};
