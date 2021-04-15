import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginSuccess } from '../redux/Auth/actions';
import Footer from './Footer';
import Header from './Header';

function Layout({ children, removeHeader }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const tokenLocalStorage = useSelector((state) => state.auth.token);
  useEffect(() => {
    const token = localStorage.getItem('@compensar:user');
    const userId = localStorage.getItem('@compensar:identification');
    if (token) {
      dispatch(loginSuccess({ token, userId }));
    }
  }, []);
  useEffect(() => {
    if (location.pathname === '/' && tokenLocalStorage) {
      history.push('/profile');
    } else if (!tokenLocalStorage) {
      history.push('/');
    }
  }, [tokenLocalStorage]);

  return (
    <>
      {!removeHeader && <Header />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
