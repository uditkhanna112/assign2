import React from 'react';
import {Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signup.css';
import axios from 'axios';

class Student extends React.Component{
    constructor(){
        super();
        this.state={
            firstname:' ',
            lastname:' ',
            username:' ',
            password:' ',
            flag:false,
            redirect: localStorage.getItem('userToken') ? true : false
        }
    }


validate=()=>{
    
        if(this.state.firstname===' '||this.state.lastname===' '||this.state.username===' '||this.state.password===' ')
        alert("Please fill all the details");    
    
}

onSubmitHandler=(e)=>{
    e.preventDefault();
    this.validate();
    const student={
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        username:this.state.username,
        password:this.state.password
}

    axios.post('/register/userregister',student)
    .then(user=>{
        toast.success('Registration successful');
        setTimeout(()=>{
            this.setState({
                flag:true
            })
        },2000);
    
    })
    .catch(err=>{
            toast.error('Username already taken');

    }
        );

    console.log(student);
}
setNameChange=(e)=>{
    this.setState({
        firstname:e.target.value
    })
}
setLastNameChange=(e)=>{
    this.setState({
        lastname:e.target.value
    })
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
        if(this.state.flag)
        return <Redirect to='/signin' />
        if (this.state.redirect) return <Redirect to='/event' />
        return(

   
 <React.Fragment>
<div className='container'>
    <div>
        <ToastContainer/>
    </div>

<div className="login_div">
<form onSubmit={this.onSubmitHandler} className='login_form'>

<div className='form-group'>
          <label className='label'>First Name:-</label>
<br/>
        <input type="text" onChange={this.setNameChange} className='input'/>
        </div>

        <div className='form-group'>
        <label className='label'>Last Name:-</label>
        <br/>
        <input type="text" onChange={this.setLastNameChange} className='input'/>
        </div>

        <div className='form-group'>
        <label className='label'>User Name:-</label>
        <br/>
        <input type="text" onChange={this.setUserNameChange} className='input'/>
</div>


        <div className='form-group'>
        <label className='label'>Set Password:-</label>
        <br/>
        <input type="password" onChange={this.setPasswordChange} className='input'/>
</div>


        <input type="submit" className='btn btn-success' />
</form>
    </div>

        </div>
        
        </React.Fragment>
        )
    }
}

export default Student;