import { Link } from "react-router-dom";
import { AppLayout } from "../../Layouts/AppLayout";
import Lottie from "lottie-react";
import template from '../../../assets/json/template.json'
import { forgetUserPassword } from "../../../services/api/api";
import { useFormik } from "formik";

const ForgetPasswordPage = () => {

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: (email) => validateEmail(email)
  })

  const validateEmail = async (email) => {
    const result = await forgetUserPassword({ ...email });



  }

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
                Forgot Password
              </h1>

              <p className="text-center text-[15px]">
                Lorem Ipsum dolor sit amet
              </p>
            </article>
          </div>

          <form onSubmit={formik.handleSubmit}>
            {/* <form> */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered input-primary w-full"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />

              </div>
              <div className="flex flex-col gap-6">
                {/* <Link> */}
                <button type="submit" className="btn">Send email verification</button>
                {/* </Link> */}
              </div>
            </div>
          </form>


          <div className="flex gap-1 justify-center">
            <p>Already have an account?</p>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </AppLayout >
  );
}

export default ForgetPasswordPage;