import { Navigate, Route, Routes } from 'react-router-dom';

const useAuth = () => {
  // const { user } = useContext(AuthContext); // Get user info from context
  return ["ADMIN"];
  // return user?.role;
};

export const ProtectedRoutes = ({ roles, path, children }) => {
  const userRole = useAuth();

  // if (!userRole || !roles.includes(userRole)) {
  //   console.log(' unauthorized');
  //   // return <Navigate to="/unauthorized" replace />;
  // }

  if (!roles.includes(userRole)) {
    console.log(' unauthorized');
    // return <Navigate to="/unauthorized" replace />;
  }
  <Routes>
    <Route path={path} element={children} />
  </Routes>

  return children;
};
