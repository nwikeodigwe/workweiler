import React from "react";
import clsx from "clsx";

interface Props {
  variant: "info" | "error" | "success" | "warning";
  children: React.ReactNode;
}
const Alert = ({ ...props }: Props) => {
  const variant = "alert-" + props.variant;
  return <div className={clsx("alert", variant)}>{props.children}</div>;
};

export default Alert;
