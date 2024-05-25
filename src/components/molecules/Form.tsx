import { LuArrowUp } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../cli/tooltip";
import { Button } from "../cli/button";
import { useCallback, useRef, useState } from "react";
import KeyDialog from "./KeyDialog";
import { Alert, AlertDescription, AlertTitle } from "../cli/alert";
import { LuAlertTriangle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import PromptButton from "../atoms/PromptButton";

const Form = () => {
  const navigate = useNavigate();
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const { key } = useForm();
  const [isError, setIsError] = useState<boolean>(false);

  const prompts = [
    "Cat with apple",
    "Anime wallpaper",
    "Galaxy landscape",
    "Cyberpunk city",
    "Fantasy dragon",
    "Minimalist sunset",
    "Abstract art",
  ];

  const HandleNavigate = useCallback(
    (prom: String) => {
      if (key === "" || prom === "") {
        setIsError(true);
        return;
      } else {
        navigate(`/craft/${prom}`);
      }
    },
    [key, navigate]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!promptRef.current) return;
    const prompt = promptRef.current?.value;

    HandleNavigate(prompt);
  };

  return (
    <div className="w-full center">
      <form
        onSubmit={handleSubmit}
        className="flex items-center  max-w-[800px] flex-col gap-8"
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
              You should use your own OpenAI key. Click on the key button to add
              one, but before you do, make sure you create an API key on
              <a href="https://platform.openai.com/playground" className="underline ml-2 font-medium" >OpenAI</a>.
            </AlertDescription>
          </Alert>
        </div>

        <div className="flex flex-col gap-6 sm:w-96 w-80 md:w-[600px]">
          {isError && (
            <p className="text-red-500 font-medium text-sm">
              Please ensure all fields, including the prompt and key, are filled
              out for image generation.
            </p>
          )}

          <div className="bg-primary border-0 shadow-custom rounded-xl flex flex-col gap-1.5 py-3 px-4 ">
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

          <div className="w-full justify-center flex items-center gap-2 flex-wrap">
            {prompts.map((text: string, index: number) => (
              <PromptButton
                onClick={() => {
                  HandleNavigate(text);
                }}
                text={text}
                key={text + index}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
