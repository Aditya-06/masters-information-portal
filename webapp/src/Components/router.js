import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './login';
import Forum from './forum';
import NavBar from './navbar';
import EditProfile from './editProfile';
import Resources from './resources';
import Messages from './Messages';
import AddResource from './AddResources';
import FullWidthTabs from './profpage3';
function RootRouter(props) {
  const renderLogin = () => <Login loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />;
  const renderEditProfile = () => <EditProfile loggedIn={props.loggedIn} />;

  return (
    <Router>
      <NavBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={renderLogin} />
        <Route exact path="/profile" component={FullWidthTabs} />
        <Route exact path="/edit" component={renderEditProfile} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/chat" component={Messages} />
        <Route exact path="/add-resource" component={AddResource} />
      </Switch>
    </Router>
  );
}

export default RootRouter;
