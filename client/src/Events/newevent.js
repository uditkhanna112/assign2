import React from 'react';
import {Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './event.css';
import axios from 'axios';

class Student extends React.Component{
    constructor(){
        super();
        this.state={
            eventname:' ',
            eventtype:' ',
            eventorganizer:' ',
            eventdate:new Date(),
            flag:false,
            redirect: localStorage.getItem('adminToken') ? true : false
        }
        if (localStorage.getItem('adminToken')) {
      
            const data = JSON.parse(localStorage.getItem('adminToken'));
           
            //logout user if session time expires
            if (new Date().getTime() - data.time > (1 * 60 * 1000)) {
            
              localStorage.removeItem('adminToken');
              localStorage.removeItem('adminData');
              
            }
          }
    }


validate=()=>{
    
        if(this.state.eventname===' '||this.state.eventtype===' '||this.state.eventorganizer===' '||this.state.password===' ')
        alert("Please fill all the details");    
    
}

onSubmitHandler=(e)=>{
    e.preventDefault();
    this.validate();
    const student={
        eventname:this.state.eventname,
        eventtype:this.state.eventtype,
        eventorganizer:this.state.eventorganizer,
        eventdate:this.state.eventdate
}

    axios.post('/events/newevent',student)
    .then(user=>{
        toast.success('Event added successfully ');
        setTimeout(()=>{
            this.setState({
                flag:true
            })
        },2000);
    
    })
    .catch(err=>{
            toast.error('event organizer already taken');

    }
        );

    console.log(student);
}
setNameChange=(e)=>{
    this.setState({
        eventname:e.target.value
    })
}
setLastNameChange=(e)=>{
    this.setState({
        eventtype:e.target.value
    })
}
setUserNameChange=(e)=>{
    this.setState({
        eventorganizer:e.target.value
    })
}
handlechange=(date)=>{
    this.setState({
      eventdate:date
    })
}

handleselect=(date)=>{
    this.setState({
        eventdate:date
      })
}

    render(){
       
        if (!this.state.redirect) return <Redirect to='/adminsignin' />
        return(

   
 <React.Fragment>
       <Link to="/adminsignout" className="signout">Signout</Link>
<div className='container'>
    <div>
        <ToastContainer/>
    </div>

<div className="login_div">
<form onSubmit={this.onSubmitHandler} className='login_form'>

<div className='form-group'>
          <label className='label'>Event Name:-</label>
<br/>
        <input type="text" onChange={this.setNameChange} className='input'/>
        </div>

        <div className='form-group'>
        <label className='label'>Event-Type</label>
        <br/>
        <input type="text" onChange={this.setLastNameChange} className='input'/>
        </div>

        <div className='form-group'>
        <label className='label'>Event Organizer:-</label>
        <br/>
        <input type="text" onChange={this.setUserNameChange} className='input'/>
</div>


        <div className='form-group'>
        <label className='label'>Event date:-</label>
        <DatePicker className='input'
        onSelect={this.handleselect}
        selected={this.state.eventdate}
        onChange={this.handleChange}
      />
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