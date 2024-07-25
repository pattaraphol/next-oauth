"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { GoMail } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import * as Yup from "yup";

function LoginForm() {
  const [errorMsg, setErrorMsg] = useState(""); // เพิ่ม state เก็บข้อผิดพลาด
  return (
    <>
      <Formik
        initialValues={{ Email: "", Password: "" }}
        validationSchema={Yup.object({
          Email: Yup.string()
            .email("Invalid email address")
            .required("Email is required."),
          Password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required."),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const result = await signIn("credentials", {
              redirect: false,
              Email: values.Email,
              Password: values.Password,
            });

            if (result?.ok) {
              //window.location.href = "/learning";
            } else {
              setErrorMsg("อีเมลหรือรหัสผ่านไม่ถูกต้อง ลองใหม่อีกครั้ง");
            }
          } catch (error) {
            setErrorMsg("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form>
            {/* Email */}
            <div className="flex flex-col w-full lg:flex-row gap-4 mb-6">
              <div className="grid flex-grow">
                <label htmlFor="Email" className="flex gap-2 items-center mb-1">
                  <GoMail color="#00cfbd" /> Email
                </label>
                <Field
                  name="Email"
                  type="text"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                />
                <div className="text-error text-sm">
                  <ErrorMessage name="Email" />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col w-full lg:flex-row gap-4 mb-6">
              <div className="grid flex-grow">
                <label
                  htmlFor="Password"
                  className="flex gap-2 items-center mb-1"
                >
                  <RiLockPasswordLine color="#00cfbd" /> Password
                </label>
                <Field
                  name="Password"
                  type="password"
                  placeholder="Enter your Password"
                  className="input input-bordered"
                />
                <div className="text-error text-sm">
                  <ErrorMessage name="Password" />
                </div>
              </div>
            </div>

            {/* Display error message */}
            {errorMsg && (
              <div className="alert alert-error">
                <span className="text-white">{errorMsg} !</span>
              </div>
            )}

            {/* submit */}
            <div className="card-actions justify-start mt-10 ">
              <button
                type="submit"
                className="btn btn-accent text-white w-full"
                disabled={formik.isSubmitting}
              >
                Log In
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
