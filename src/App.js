import "./App.css";
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

//import Section from "./components/Section";
import Container from "./components/Container/";
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loaderr from'./components/Loader/Loader';
import { getCurrentUser } from './redux/auth/operations';
//import { authSelectors } from './redux/auth/selectors';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeView = lazy(() => import('./components/Views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./components/Views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./components/Views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./components/Views/ContactsView/ContactsView'));


export default function App() {
  const dispatch = useDispatch();
  //const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);


  return (
    <>
      <ToastContainer />
      <Container>
        <AppBar />
        <Suspense fallback={<Loaderr/>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted redirectTo="/contacts">
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo="/contacts" >
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
