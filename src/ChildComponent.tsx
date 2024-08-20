import { useFormikContext } from "formik";
import { type FC } from "react";

export const ChildComponent: FC = () => {
  const { values } = useFormikContext();
  console.log({ values });
  return <div>This is child component.</div>;
};
