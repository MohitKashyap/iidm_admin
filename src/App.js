import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import Registrations from "./views/Registrations";


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));
// const Vendor = React.lazy(() => import('./vendors/vendor.component'));
//const Registrations = React.lazy(() => import('./views/Registrations'));
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('auth')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )} />
)
class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            {/* <PrivateRoute exact path='/register' component={AddVendor} /> */}
            {/* <PrivateRoute exact path='/edit-registration/:id' component={AddVendor} /> */}

            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
            <PrivateRoute path="/" name="Home" component={DefaultLayout} />
            <PrivateRoute exact path='/registrations' component={Registrations} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
