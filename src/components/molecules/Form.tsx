import { LuArrowUp } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../cli/tooltip";
import { Button } from "../cli/button";
import { useRef } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import KeyDialog from "./KeyDialog";
import { Alert, AlertDescription, AlertTitle } from "../cli/alert";
import { LuAlertTriangle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const Form = () => {
  const navigate = useNavigate();
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const { key } = useForm();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!promptRef.current) return;
    const prompt = promptRef.current?.value;

    if (key !== "" && prompt !== "") {
      navigate(`/craft/${prompt}`);
    }
  };

  return (
    <div className="w-full center">
      <form
        onSubmit={handleSubmit}
        className="flex items-center  max-w-[800px] flex-col gap-6"
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

        <div className="w-72 sm:w-[65%] ">
          <Alert>
            <LuAlertTriangle className="size-5 text-red-500" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You should use your own openAi key , click on key button to add
              one
            </AlertDescription>
          </Alert>
        </div>

        <div className="sm:w-96 w-80 border border-border shadow-xl bg-primary rounded-xl md:w-[600px] flex flex-col gap-1.5 py-3 px-4 ">
          <div className="flex w-full justify-between gap-2 items-center">
            <textarea
              className="min-h-[1.5rem] w-full flex-[1_0_50%] resize-none border-0 bg-transparent pr-2 text-sm leading-relaxed shadow-none outline-none ring-0 [scroll-padding-block:0.75rem] selection:bg-teal-300 selection:text-black disabled:bg-transparent disabled:opacity-80 text-white placeholder:text-zinc-400 [&amp;_textarea]:px-0"
              id="home-prompt"
              maxLength={1000}
              minLength={2}
              style={{ colorScheme: "dark", height: "23px" }}
              placeholder="A chat application"
              rows={1}
              spellCheck={false}
              ref={promptRef}
            ></textarea>

            <KeyDialog />
          </div>

          <div className="w-full flex justify-end items-center">
            <TooltipProvider delayDuration={1}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    type="submit"
                    size={"icon"}
                    className="text-muted-foreground hover:text-white hover:bg-white/10"
                    variant={"default"}
                  >
                    <LuArrowUp className="size-5 " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="mt-3 bg-primary text-muted font-medium"
                >
                  <p>Submit</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="max-w-full justify-center flex items-center gap-3 flex-wrap">
          <Button
            className="flex items-center rounded-full "
            variant={"outline"}
            size={"sm"}
          >
            <span>Anime Wallpaper</span>
            <LuArrowUpRight className="size-5" />
          </Button>

          <Button
            className="flex items-center rounded-full gap-2"
            variant={"outline"}
            size={"sm"}
          >
            <span>Regoku sword</span>
            <LuArrowUpRight className="size-5" />
          </Button>
          <Button
            className="flex items-center rounded-full gap-2"
            variant={"outline"}
            size={"sm"}
          >
            <span>batman</span>
            <LuArrowUpRight className="size-5" />
          </Button>
          <Button
            className="flex items-center rounded-full gap-2"
            variant={"outline"}
            size={"sm"}
          >
            <span>hitler</span>
            <LuArrowUpRight className="size-5" />
          </Button>
          <Button
            className="flex items-center rounded-full gap-2"
            variant={"outline"}
            size={"sm"}
          >
            <span>zanji sa3id</span>
            <LuArrowUpRight className="size-5" />
          </Button>
          <Button
            className="flex items-center rounded-full gap-2"
            variant={"outline"}
            size={"sm"}
          >
            <span>ui exmaple of login page</span>
            <LuArrowUpRight className="size-5" />
          </Button>
          <Button
            className="flex items-center rounded-full gap-2"
            variant={"outline"}
            size={"sm"}
          >
            <span>karen</span>
            <LuArrowUpRight className="size-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
