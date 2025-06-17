import { List } from "./list";
import { Details } from "./list/details";

export default function Index() {
  return (
    <section className="grid grid-cols-12 gap-5 min-h-screen">
      <List />
      <Details />
    </section>
  );
}
