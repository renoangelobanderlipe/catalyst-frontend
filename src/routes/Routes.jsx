import AdminDashboardPage from "../pages/Admin/Dashboard/AdminDashboardPage";
import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "../pages/Auth/SignupPage";
import UserDashboardPage from "../pages/User/Dashboard/UserDashboardPage";

export const AUTH_PAGES = [
  {
    name: 'Login',
    component: <LoginPage />,
    path: '/login'
  },
  {
    name: 'Signup',
    component: <SignupPage />,
    path: '/signup'
  }
]

export const USER_PAGES = [
  {
    name: 'Dashboard',
    component: <UserDashboardPage />,
    path: 'dashboard'
  },
]

export const ADMIN_PAGES = [
  {
    id: 0,
    name: 'Dashboard',
    component: <AdminDashboardPage />,
    path: '/dashboard'
  },
]