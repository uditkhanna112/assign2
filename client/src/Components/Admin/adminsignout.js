import React from 'react';
import { Redirect } from 'react-router-dom';

const signOut = props => {
  if (localStorage.getItem('adminToken')) {
    localStorage.removeItem('adminToken');
  }
  return <Redirect to="/adminsignin" />;
}

export default signOut;
