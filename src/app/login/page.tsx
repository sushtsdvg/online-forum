import FormWrapper, {
  FormType,
  IlookUpValidations,
  initialValuesType,
  IValidationYupValues,
  Login,
  yupStringSchema,
} from "@/components/Login";
import Image from "next/image";
import * as yup from "yup";
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
const page = () => {
  const formData = getFormData();
  const inputFields = formData
    .filter((formInput) => formInput?.input?.name)
    .map((formInput) => formInput.input.name);
  const initialValues: initialValuesType = inputFields.reduce(
    (prev, current) => ({ ...prev, [current]: "" }),
    {}
  );
  const validationYupValues: IValidationYupValues = { ...initialValues };

  formData.forEach((key) => {
    validationYupValues[key.input.name] = lookUpValidations[
      key.input.type as keyof IlookUpValidations
    ] as yupStringSchema;
  });

  const validationSchema = yup.object().shape({ ...validationYupValues });

  return (
    <div className="w-full bg-gray-400 flex flex-row p-8">
      <div className="bg-white rounded-l-lg w-[50%]">
        <div className="p-8 inline-flex flex-row gap-2 justify-center items-center sm:pl-2 lg:pl-40">
          <Image
            width={25}
            height={25}
            src="/images/dotwork.png"
            alt="dotwork"
          />
          <p className="text-blue-600 text-sm font-semibold">dotwork</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-black font-semibold text-2xl p-2 flex flex-row justify-center">
            Log in to your Account
          </p>
          <p className="text-gray-400 p-2 text-sm flex flex-row justify-center">
            Welcome back! Select method to login:
          </p>
        </div>
        <div className="flex flex-row justify-center gap-2 p-2">
          <button className="bg-white rounded-lg p-2 border border-gray-400 flex flex-row gap-2">
            <Image
              src="/images/google-color-svgrepo-com.svg"
              alt="google-icon"
              width={20}
              height={10}
            />
            Google
          </button>
          <button className="bg-white rounded-lg p-2 border border-gray-400 flex flex-row gap-2">
            <Image
              src="/images/facebook-3-logo-svgrepo-com.svg"
              alt="facebook-icon"
              width={20}
              height={10}
            />
            Facebook
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <p>or continue with email</p>
        </div>
        <FormWrapper
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col">
              {formData.map((form, key) => {
                return (
                  <Login key={key} image={form.image} input={form.input} />
                );
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
      <div className="bg-[#065ad8] rounded-r-lg w-[50%]">
        <div className="flex flex-col items-center justify-evenly p-12">
          <Image
            width={500}
            height={500}
            src="/images/form-image.png"
            alt="form-image"
          />
          <p className="text-white font-semibold">
            Connect with every application.
          </p>
          <p className="text-[#9bbcee] font-extralight text-sm pt-2">
            Everything you need in an easily customizable dashboard.
          </p>
          <ul className="list-disc text-white inline-flex gap-6 pl-2">
            <li></li>
            <li className="text-gray-400"></li>
            <li className="text-gray-400"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
