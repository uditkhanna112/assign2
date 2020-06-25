import React,{createRef} from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './signin.css';
class Student extends React.Component{
    constructor(){
        super();
        this.state={
            username:' ',
            password:' ',
            token:'',
            userinfo:[],
            redirect: localStorage.getItem('userToken') ? true : false

        }
    }


  wrapper = createRef();


    //submission of form
onSubmitHandler=(e)=>{
    e.preventDefault();
    const student={
        username:this.state.username,
        password:this.state.password,
    }

    //call to backend API
    axios.post('/authenticate/user',student)
    .then(user=>{
        if(!user)
        toast.error("username does not exists");

        this.setState({
            token:user.data.token
        
        })
 
        const data={
            token:this.state.token,
            time: new Date().getTime()
        }
      localStorage.setItem('userToken', JSON.stringify(data));
      this.setState({
        redirect: true
      });

        
        })
    .catch(
        
    );

    
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
return <Redirect to="/event"></Redirect>
//checks wheter user is loggedin or not
        return(
<React.Fragment>
                <ToastContainer/>
            <div   ref={this.wrapper}>
<div className='container'>
<div className="login_div">
<form onSubmit={this.onSubmitHandler} className='login_form'>


                    <div className='form-group'>
              
                    <input type="text" onChange={this.setUserNameChange} className='input' placeholder="Username"/>
</div>
                    <div className='form-group'>
                    
                    <input placeholder="Password" type="password" onChange={this.setPasswordChange} className='input'/>
</div>

                    <input type="submit" className='btn btn-success' />

<br>
</br>
<br>
</br>
<br>
</br>
        </form>
        <Link to="/studentsignup" className="textinfo">Not Registered? Create Account</Link>
        </div>
        </div>
        </div>
</React.Fragment>
        )
    }
}

export default Student;