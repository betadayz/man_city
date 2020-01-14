import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/home';
import SignIn from './Components/signIn';
import Dashboard from './Components/admin/Dashboard';

const Routes = (props) => {
  console.log(props)
  return(
    <Layout>
      <Switch>
         <Route exact component={Dashboard} path="/dashboard"/>
         <Route exact component={SignIn} path="/sign_in"/> 
         <Route exact component={Home} path="/"/>
      </Switch>
      
    </Layout>
  )
}
export default Routes;
