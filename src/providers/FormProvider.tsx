import { createContext, useState } from "react";

type Props = {
  key: string;
  setKey: React.Dispatch<React.SetStateAction<string>>;
};

export const Form = createContext<Props>({
  key: "",
  setKey: () => {},
});

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [key, setKey] = useState<string>("");

  return <Form.Provider value={{ key, setKey }}>{children}</Form.Provider>;
}
