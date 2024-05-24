import { useContext } from "react";
import { Form } from "../providers/FormProvider";

export const useForm = () => useContext(Form);
