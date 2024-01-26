import Lottie from "lottie-react";
import { AppLayout } from "../../Layouts/AppLayout";
import template from '../../../assets/json/template.json'
import { Link } from "react-router-dom";

const EmailSentPage = () => {
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
                Email Sent
              </h1>

              <p className="text-center text-[15px]">
                We sent an email to reno***** that will verify your account to reset your password.
              </p>
            </article>
          </div>

          <div className="flex flex-col gap-[11px]">
            <button className="btn btn-outline">
              Try Again
            </button>

            <button className="btn">
              Back to Login
            </button>
          </div>

          <div className="flex gap-1 justify-center">
            <p>Didn't get the email? Try these tips from our Help Center</p>
          </div>
        </div>
      </div>
    </AppLayout >
  );
}

export default EmailSentPage;