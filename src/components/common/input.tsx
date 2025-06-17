import React from "react";
import clsx from "clsx";

interface Props {
  variant?: "rounded" | "square" | "curved";
  id?: string;
  name?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
}
const Input = ({ className, children, ...props }: Props) => {
  const variant = props.variant ? `input-${props.variant}` : "square";
  return (
    <div className={clsx("input flex items-center gap-1", variant, className)}>
      {children}
      <input {...props} className="w-full" />
    </div>
  );
};

export default Input;
