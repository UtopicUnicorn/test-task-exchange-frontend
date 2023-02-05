import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
  //get token from sessionStorage
  const token = sessionStorage.getItem('userID');
  //if user is not logged in -> redirect to login page
  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};

export default ProtectedRoute;
