import { Route, Routes } from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import SignupPage from "./Auth/SignupPage";
import { BaseLayout } from "./Layouts/BaseLayout";
import ForgetPasswordPage from "./Auth/ForgetPassword/ForgetPasswordPage";
import EmailSentPage from "./Auth/ForgetPassword/EmailSentPage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<>LANDING PAGE</>} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/email-sent' element={<EmailSentPage />} />
      <Route path='/reset-password' element={<ForgetPasswordPage />} />

      <Route path='/user' element={<BaseLayout />}>
      </Route>

    </Routes >
  );
}
export default App;