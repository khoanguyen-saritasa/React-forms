import { useField } from "formik";
import { type FC } from "react";

type Props = {
  name: string;
};

export const CustomInput: FC<Props> = ({ name }) => {
  const [field,, helper] = useField<string>({ name });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <input {...field} placeholder="My custom input" />
      <button onClick={() => helper.setValue("Input value Change")}>
        Change input value
      </button>
    </div>
  );
};
