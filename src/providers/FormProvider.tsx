import { createContext, useState } from "react";

type Props = {
  key: string;
  setKey: React.Dispatch<React.SetStateAction<string>>;

  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
};

export const Form = createContext<Props>({
  key: "",
  setKey: () => {},
  prompt: "",
  setPrompt: () => {},
});

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [key, setKey] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");

  return (
    <Form.Provider value={{ key, setKey, prompt, setPrompt }}>
      {children}
    </Form.Provider>
  );
}
