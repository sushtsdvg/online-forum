"use client";
import { Formik, FormikErrors, useFormikContext } from "formik";
import Image from "next/image";
import { ReactNode } from "react";
import * as yup from "yup";

export interface FormType {
  image: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
  input: {
    type: string;
    placeholder: string;
    name: string;
  };
}
export type yupStringSchema = yup.StringSchema<
  string | undefined,
  yup.AnyObject,
  undefined,
  ""
>;
export type initialValuesType = { [key: string]: yupStringSchema };
export interface IlookUpValidations {
  email: yupStringSchema;
  password: yupStringSchema;
}
export interface IValidationYupValues {
  [key: string]: yupStringSchema;
}
export default function FormWrapper({
  initialValues,
  validationSchema,
  children,
}: {
  initialValues: initialValuesType;
  validationSchema: yup.ObjectSchema<object, yup.AnyObject, object, "">;
  children: ReactNode;
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <form className="flex-col" onSubmit={formik.handleSubmit}>
          <div className="flex flex-row p-2 justify-center">{children}</div>
        </form>
      )}
    </Formik>
  );
}
export function Login({ image, input }: FormType) {
  const formik = useFormikContext();
  const error: FormikErrors<typeof formik.values> = formik.errors;
  return (
    <div
      className={
        "inline-flex outline outline-gray-500 outline-1 rounded-lg p-2 m-2 "
      }
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <input
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
        onChange={formik.handleChange}
        className="outline-none"
      />
      <p className="text-red-600 font-normal">
        {JSON.stringify(error?.[input.name])}
      </p>
    </div>
  );
}
