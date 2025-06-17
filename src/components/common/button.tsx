import React from "react";
import clsx from "clsx";

type buttonVariant =
  | "rounded"
  | "square"
  | "curved"
  | "outline"
  | "outline-rounded"
  | "outline-square"
  | "outline-curved";

interface Props {
  type?: string;
  variant?: buttonVariant;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button = ({ ...props }: Props) => {
  const variant = props.variant ? `btn-${props.variant}` : "btn-square";
  return (
    <button
      onClick={props.onClick}
      className={clsx("btn", variant, props.className)}
    >
      {props.children}
    </button>
  );
};

export default Button;
