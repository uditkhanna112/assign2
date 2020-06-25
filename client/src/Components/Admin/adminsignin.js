import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router';


class Adminsignin extends React.Component{
    constructor(){
        super();
        this.state={
            username:' ',
            password:' ',
            token:'',
            redirect: localStorage.getItem('adminToken') ? true : false
        }
    }

    //on cicking submit button of form
onSubmitHandler=(e)=>{
    e.preventDefault();
    const student={
        username:this.state.username,
        password:this.state.password,
}

//call to backend API to authenticate admin
    axios.post('/authenticate/admin',student)
    .then(user=>{

   this.setState({
       token:user.data.token
   })
       const data={
           token:this.state.token,
           time:new Date().getTime()
       }

       //setting token in local storage
       localStorage.setItem('adminToken',JSON.stringify(data));
       this.setState({
        redirect: true
      });
    })
    .catch((err)=>{
    toast.error('Wrong Credentials');
    });

    
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
        if(this.state.redirect)
        return <Redirect to="/newevent"></Redirect>
        return(
            <React.Fragment>
            <ToastContainer/>
<div className='container'>
<h1 className='heading'>Login Form:</h1>
<form onSubmit={this.onSubmitHandler} className='formstudent'>
                    <div className='form-group'>
                    <label className='label'>User Name:-</label>
                    <input type="text" onChange={this.setUserNameChange} className='input'/>
</div>

                    <div className='form-group'>
                    <label className='label'>Password:-</label>
                    <input type="password" onChange={this.setPasswordChange} className='input'/>
</div>
                    
                    
                    <input type="submit" className='btn btn-primary' />
        </form>
        </div>
        </React.Fragment>
        )
    }
}

export default Adminsignin;