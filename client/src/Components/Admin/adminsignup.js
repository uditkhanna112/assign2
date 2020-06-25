import React from 'react';
import {Redirect } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

class Adminsignup extends React.Component{
    constructor(){
        super();
        this.state={
            username:' ',
            password:' ',
            redirect: localStorage.getItem('adminToken') ? true : false
        }
        
    }
onSubmitHandler=(e)=>{
    e.preventDefault();
    const student={
        username:this.state.username,
        password:this.state.password,
    }
    axios.post('/register/adminregister',student)
    .then(user=>{
        this.setState({
            redirect:true
        })
        console.log(user);
    })
    .catch(err=>{console.log(err)});

    console.log(student);
}
setUserNameChange=(e)=>{
    this.setState({
        username:e.target.value
    })
}
setPasswordChange=(e)=>{
    this.setState({
        password:e.target.value
    })
}



    render(){
        if (this.state.redirect) return <Redirect to='/adminsignin' />
        return(
<div className='container'>
<h1 className='heading'>Registration Form:</h1>
<form onSubmit={this.onSubmitHandler} className='formstudent'>

     
                    <div className='form-group'>
                    <label className='label'>User Name:-</label>
                    <input type="text" onChange={this.setUserNameChange} className='input'/>
</div>
      
 
                    <div className='form-group'>
                    <label className='label'>Set Password:-</label>
                    <input type="password" onChange={this.setPasswordChange} className='input'/>
</div>

     
                    <input type="submit" className='btn btn-primary' />
        </form>
        </div>
        )
    }
}

export default Adminsignup;