import { Button } from "../cli/button";
import { LuArrowUpRight } from "react-icons/lu";

type Props = {
  text: string;
  onClick: () => void;
};

export default function PromptButton({ text, onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className="flex items-center rounded-full "
      variant={"outline"}
      size={"sm"}
    >
      <span> {text} </span>
      <LuArrowUpRight className="size-5" />
    </Button>
  );
}
