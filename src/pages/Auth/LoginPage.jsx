import { AppLayout } from "../Layouts/AppLayout";
import Lottie from "lottie-react";
import template from "../../assets/json/template.json"
import { useFormik } from "formik";
import { loginUser } from "../../services/api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const LoginPage = () => {
  const queryClient = useQueryClient();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (val) => test(val)
  });


  const test = (val) => {
    const { data, isSuccess } = useQuery({
      queryKey: ['login'],
      queryFn: loginUser({ ...val }),
    });

    console.log('isSuccess', isSuccess);
    if (isSuccess) {
      console.log('data', data);
    }
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
                Welcome to Catalyst
              </h1>

              <p className="text-center text-[15px]">
                Lorem Ipsum dolor sit amet
              </p>
            </article>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-6">
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />

              <input
                id="password"
                type="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full"
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              <div className="flex flex-col gap-[11px]">
                <button type="submit" className="btn text-[12px]">
                  Login
                </button>

                <button type="submit" className="btn btn-outline text-[12px]">
                  Create Account
                </button>
              </div>
            </div>
          </form>


        </div>
      </div>
    </AppLayout >
  )
}
export default LoginPage;