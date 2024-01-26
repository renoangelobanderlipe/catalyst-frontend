import { Link } from "react-router-dom";
import { AppLayout } from "../../Layouts/AppLayout";

const ResetPage = () => {
  return (
    <AppLayout>
      <div>
        <div className="w-[327px] h-[199px]">
          <img src="" alt="CONTAINER" />
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <article class="prose" >
              <h1 className="text-center text-[36px]">
                Reset Password
              </h1>

              <p className="text-center text-[15px]">
                Lorem Ipsum dolor sit amet
              </p>
            </article>
          </div>

          {/* <form onSubmit={formik.handleSubmit}> */}
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <input
                  id="new_password"
                  type="password"
                  placeholder="Enter New Password"
                  className="input input-bordered input-primary w-full"
                // onChange={formik.handleChange}
                // value={formik.values.first_name}
                />

                <input
                  id="password_confirmation"
                  type="password"
                  placeholder="Confirm New Password"
                  className="input input-bordered input-primary w-full"
                // onChange={formik.handleChange}
                // value={formik.values.first_name}
                />


              </div>
              <div className="flex flex-col gap-6">
                {/* <Link> */}
                <button type="submit" className="btn">Change Password</button>
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

export default ResetPage; 