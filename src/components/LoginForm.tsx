"use client";
import * as yup from "yup";
import FormWrapper, {
  FormType,
  IlookUpValidations,
  initialValuesType,
  IValidationYupValues,
  Login,
  yupStringSchema,
} from "./Login";
const getFormData = (): FormType[] => {
  return [
    {
      image: {
        src: "/images/email-svgrepo-com.svg",
        alt: "email-icon",
        width: 20,
        height: 10,
      },
      input: {
        type: "email",
        placeholder: "Email",
        name: "email",
      },
    },
    {
      image: {
        src: "/images/password-svgrepo-com.svg",
        alt: "password-icon",
        width: 20,
        height: 10,
      },
      input: {
        type: "password",
        placeholder: "Password",
        name: "password",
      },
    },
  ];
};
const lookUpValidations: IlookUpValidations = {
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(6),
};
const LoginForm = () => {
  const formData = getFormData();
  const inputFields = formData
    .filter((formInput) => formInput?.input?.name)
    .map((formInput) => formInput.input.name);
  const initialValues: initialValuesType = inputFields.reduce(
    (prev, current) => ({ ...prev, [current]: "" }),
    {}
  );
  const validationYupValues: IValidationYupValues = { ...initialValues };
  const validationSchema = yup.object().shape({ ...validationYupValues });
  formData.forEach((key) => {
    validationYupValues[key.input.name] = lookUpValidations[
      key.input.type as keyof IlookUpValidations
    ] as yupStringSchema;
  });
  return (
    <div>
      <FormWrapper
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            {formData.map((form, key) => {
              return <Login key={key} image={form.image} input={form.input} />;
            })}
          </div>
          <div className="inline-flex flex-row justify-center gap-2 m-2">
            <div className="inline-flex gap-2 ">
              <input type="checkbox" name="Remember Me" id="checkbox" />
              <label htmlFor="remember Me">Remember Me</label>
            </div>
            <div className="text-blue-600">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="bg-[#065ad8] rounded-lg w-full text-white text-center py-2 m-2">
            <button type="submit">Log in</button>
          </div>
          <div className="inline-flex gap-2 p-2 m-2 text-gray-400">
            <p>Don&apos;t have an account?</p>
            <a href="#" className="text-blue-500">
              Create an account
            </a>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;
