import React from 'react';
import { Redirect } from 'react-router-dom';


//Signs out user
const signOut = props => {
  if (localStorage.getItem('userToken')) {
    localStorage.removeItem('userToken');

  }
  return <Redirect to="/" />;
}

export default signOut;
