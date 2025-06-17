import { Info } from "./info";
import Vacancies from "./vacancies";

export default function Index() {
  return (
    <section className="flex flex-col gap-5">
      <Info />
      <Vacancies />
    </section>
  );
}
