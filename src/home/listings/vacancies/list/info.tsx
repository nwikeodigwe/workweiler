import clsx from "clsx";

interface Props {
  className?: string;
}
export const Info = ({ ...props }: Props) => {
  return (
    <div className={clsx("flex flex-col text-jet/70", props.className)}>
      <p>Marcum Search</p>
      <ul className="flex items-center gap-4">
        <li>Lincoln, NE</li>
        <li>Today</li>
        <li>Remote</li>
      </ul>
    </div>
  );
};
