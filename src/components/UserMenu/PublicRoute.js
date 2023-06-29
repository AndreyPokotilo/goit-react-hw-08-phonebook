import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = ({
  redirectTo = '/phonebook',
  children,
  restricted = false,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? (
    <Navigate to={(redirectTo)} />
  ) : (
    children
  );
};
