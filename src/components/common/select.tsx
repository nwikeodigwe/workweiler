import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  variant?: "rounded" | "square" | "curved";
  className?: string;
}

const Select = ({ ...props }: Props) => {
  const variant = props.variant ? `select-${props.variant}` : "select-square";
  return (
    <select
      name=""
      id=""
      aria-placeholder="Country"
      className={clsx("select", variant, props.className)}
    >
      {props.children}
    </select>
  );
};

export default Select;
