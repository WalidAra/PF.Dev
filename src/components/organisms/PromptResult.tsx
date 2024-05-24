import { cn } from "../../lib/utils";

const PromptResult = () => {
  const open = true;
  return (
    <section
      className={cn("w-full  duration-500 ", open ? "h-96" : "h-0")}
    ></section>
  );
};

export default PromptResult;
