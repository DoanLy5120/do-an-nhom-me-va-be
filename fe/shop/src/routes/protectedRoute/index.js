// import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // const token = localStorage.getItem('token');
  // return token ? children : <Navigate to="/login" />;
  return children;
}

export default ProtectedRoute;