import { Button } from "@/components";
import { Skills } from "./skills";
import { Description } from "./description";

export const Content = () => {
  return (
    <div className="flex flex-col py-7 px-5 gap-4 border-b-2 border-jet/10">
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-[500]">
          <h2>Want to know if you’re a fit?</h2>
          <p className="">Upload your resume and let our AI show you.</p>
        </div>
        <Button variant="curved" className="w-fit font-[500]">
          Upload Resume
        </Button>
        <Button variant="outline">Have An Account? Log in</Button>
      </div>
      <Skills />
      <Description />
    </div>
  );
};
