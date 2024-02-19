import { Field, Form, Formik, FormikHelpers } from "formik";

import bgExample from "/assets/avatar-customize.png";
import microsoft from "/assets/microsoft.png";

interface Values {
  email: string;
  password: string;
}

const ModalSignIn = () => {
  return (
    <dialog id="sign-in" className="modal">
      <div className="w-11/12 max-w-5xl modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex">
          <div className="card-body">
            <h2 className="card-title">
              Please sign in to generate Custom Avatars!
            </h2>
            <p>New to Canawan? Create an account</p>
            <div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 500);
                }}
              >
                <Form className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 input input-bordered">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="grow"
                      placeholder="Email"
                    />
                  </label>
                  <label className="flex items-center gap-3 input input-bordered">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="grow"
                      placeholder="password"
                    />
                  </label>
                  <div className="w-full mb-3 text-left">
                    <a href="/forgot-password" className="hover:underline">
                      Forget your password?
                    </a>
                  </div>
                  <button className="mb-3 btn btn-primary" type="submit">
                    Sign in
                  </button>
                </Form>
              </Formik>
            </div>
            <div className="flex flex-col">
              <button className="btn">
                <img src={microsoft} alt="microsoft" className="w-6 h-6" />
                Sign in with microsoft
              </button>
            </div>
          </div>
          <figure className="w-1/2 px-3 border-l border-gray-400 bg-slate-100">
            <img src={bgExample} alt="Album" />
          </figure>
        </div>
      </div>
    </dialog>
  );
};

export default ModalSignIn;
