import { useFormik } from "formik";
import { AppLayout } from "../Layouts/AppLayout";
import Lottie from "lottie-react";
import template from '../../assets/json/template.json'
import { signupUser } from "../../services/api/api";
import useNotification from "../../hooks/useSnackbar";

const SignupPage = () => {
  const { showSuccessNotification, showErrorNotification } = useNotification();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    onSubmit: async (value) => {
      const { data, code } = await signupUser({ ...value });

      if (code) {
        showSuccessNotification(data.message)
      } else {
        showErrorNotification(data.message);
      }

    },
  });

  return (
    <AppLayout>
      <div>
        <div className=" h-full w-full">
          <div className='w-[400px]'>
            <Lottie animationData={template} loop={true} />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <article class="prose" >
              <h1 className="text-center text-[36px]">
                Create an Account
              </h1>

              <p className="text-center text-[15px]">
                Lorem Ipsum dolor sit amet
              </p>
            </article>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <input
                  id="first_name"
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered input-primary w-full"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                />
                <input
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered input-primary w-full"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-primary w-full"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />

                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered input-primary w-full"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />

                <input
                  id="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered input-primary w-full"
                  onChange={formik.handleChange}
                  value={formik.values.password_confirmation}
                />

              </div>
              <div className="flex flex-col gap-[11px]">
                {/* <Link> */}
                <button type="submit" className="btn">Login</button>
                {/* </Link> */}
                {/* <Link to={'/login'}> */}
                <button className="btn btn-outline">
                  Create Account
                </button>
                {/* </Link> */}
              </div>
            </div>
          </form>

          <button className="btn btn-link">Forget Password?</button>
        </div>
      </div>
    </AppLayout>
  )
}

export default SignupPage;