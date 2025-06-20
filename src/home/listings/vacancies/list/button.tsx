import clsx from "clsx";
import { Button as Btn } from "@/components";
import { AiFillThunderbolt } from "react-icons/ai";

interface Props {
  className?: string;
}

const Button = ({ ...props }: Props) => {
  return (
    <Btn
      variant="curved"
      className={clsx(
        "bg-gold text-white font-[500] justify-center",
        props.className
      )}
    >
      <AiFillThunderbolt />
      Quick Apply
    </Btn>
  );
};

export default Button;
