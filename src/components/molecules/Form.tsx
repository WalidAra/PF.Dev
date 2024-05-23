import { LuArrowUp } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../cli/ui/tooltip";
import { Button } from "../cli/ui/button";
import { useRef } from "react";

const Form = () => {
  const promptRef = useRef<HTMLInputElement>(null);

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!promptRef.current) return;
    const value = promptRef.current?.value;
    console.log(value);
  };

  return (
    <div className="w-full center">
      <form
        onSubmit={HandleSubmit}
        className="flex items-center flex-col gap-6"
      >
        <div className="flex items-center text-center flex-col gap-1.5">
          <h1 className=" text-3xl whitespace-nowrap font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Create. Enhance. Deliver.
          </h1>
          <span
            className=" max-w-[70%] sm:max-w-[750px] sm:text-lg text-foreground"
            data-br=":r4e:"
            data-brr="1"
            style={{
              display: "inline-block",
              verticalAlign: "top",
              textDecoration: "inherit",
              maxWidth: "502px",
            }}
          >
            Empower your creativity with PF.Dev. Seamlessly generate, refine,
            and deliver stunning images.
          </span>
        </div>

        <div className="sm:w-96 w-80 border border-border shadow-xl bg-primary rounded-xl md:w-[600px] py-3 px-4 ">
          <div className="flex w-full justify-between gap-2 items-center">
            <input
              ref={promptRef}
              type="text"
              className="bg-transparent text-muted w-full"
              placeholder="A chat application"
            />

            <TooltipProvider delayDuration={1}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    type="submit"
                    size={"icon"}
                    className="text-muted hover:bg-white/10"
                    variant={"default"}
                  >
                    <LuArrowUp className="size-5 " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="mt-3 bg-primary text-muted font-medium">
                  <p>Submit</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
