import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Check from './Signup/Signup';
import Signin from './Signin/signin';
import Event from './Events/Event';
import Adminsignup from './Components/Admin/adminsignup';
import Adminsignin from './Components/Admin/adminsignin';
import NewEvent from './Events/newevent';
import Signout from './Components/Signout.js/signout';
import AdminSignout from './Components/Admin/adminsignout';
function App() {
  return (
    <div>
      <Router>
<Route exact path='/' component={Layout}/>
      <Route  path ='/signup' component={Check}/>
      <Route  path ='/signin' component={Signin}/>
      <Route  path ='/newevent' component={NewEvent}/>
      <Route  path ='/signout' component={Signout}/>
      <Route  path ='/adminsignout' component={AdminSignout}/>
      <Route  path ='/adminsignup' component={Adminsignup}/>
      <Route  path ='/adminsignin' component={Adminsignin}/>
      {/* <StaticRouter location={{ pathname: "/event" }}/> */}
      <Route strict  exact path ='/event' component={Event}/>
</Router>
    </div>
  );
}

export default App;
