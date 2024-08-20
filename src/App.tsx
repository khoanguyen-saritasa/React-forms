import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as yup from "yup";
import "./App.css";
import { CustomInput } from "./CustomInput";
import { ChildComponent } from "./ChildComponent";

type Form = {
  firstName: string;
  lastName: string;
  password: string;
  testObject: object | null;
};

const validationSchema: yup.Schema<Form> = yup.object().shape({
  firstName: yup
    .string()
    .email("This field has to be an email!")
    .required("Email is required!"),
  lastName: yup.string().required(),
  password: yup.string().required("Password is required!"),
  testObject: yup.object().nullable(),
});

const INITIAL_FORM: Form = {
  firstName: "Khoa",
  lastName: "Nguyen",
  password: "",
  testObject: {
    objectKey: "Test",
  },
};

function App() {
  const handleSubmit = (formValue: Form) => {
    console.log({ formValue });
  };
  const formik = useFormik({
    initialValues: INITIAL_FORM,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <Form
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        onSubmit={formik.handleSubmit}
      >
        <label>
          First name:
          <Field name="firstName" as="input" />
          <ErrorMessage component="div" name="firstName" />
        </label>
        <label>
          Last name:
          <CustomInput name="lastName" />
          <ErrorMessage component="div" name="lastName" />
        </label>
        <label>
          Password
          <Field name="password" type="password" as="input" />
          <ErrorMessage component="div" name="password" />
        </label>
        <label>
          Some object field
          <Field name="testObject.objectKey" as="input" />
        </label>
        <button type="submit">Submit</button>
        <ChildComponent />
      </Form>
    </FormikProvider>
  );
}

export default App;
