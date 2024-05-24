import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../cli/alert-dialog";
import { Button } from "../cli/button";
import { FaKey } from "react-icons/fa6";
import { Input } from "../cli/input";
import { useForm } from "../../hooks/useForm";

export default function KeyDialog() {
  const { setKey } = useForm();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="submit"
          size={"icon"}
          className="text-muted-foreground hover:text-white hover:bg-white/10"
          variant={"default"}
        >
          <FaKey className="size-4 " />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Enter your openAi Key</AlertDialogTitle>
          <AlertDialogDescription>
            Don't worry this is friendly website we don't steal keys , i bet you
            paid for gpt-3.5 turbo model you poor ass
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          onChange={(e) => setKey(e.target.value)}
          type="text"
          placeholder="sk-***********************************************"
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}