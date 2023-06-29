import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { AppBar } from './AppBar/AppBar';
import { HomePage } from 'pages/HomePage/HomePage';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { PhoneBook } from '../pages/PhoneBook/phoneBook';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

// import css from './App.module.css';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { PublicRoute } from './UserMenu/PublicRoute';

export function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (isRefresh ? (
    <b>Refreshing user...</b>
  )
   : (<div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            element={
              <PublicRoute redirectTo="/">
                <HomePage />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/phonebook" restricted>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/phonebook" restricted>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login">
                <PhoneBook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>)
  );
}
