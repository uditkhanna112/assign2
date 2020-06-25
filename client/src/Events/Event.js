import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './event.css';
import Axios from 'axios';
import Card from '../Components/Card/card';
class NewEvent extends React.Component{
    constructor(){
    super();
this.state={
    redirect:localStorage.getItem('userToken') ? true:false,
eventList:[]
}

if (localStorage.getItem('userToken')) {
      
    const data = JSON.parse(localStorage.getItem('userToken'));
   
    //logout user if session time expires
    if (new Date().getTime() - data.time > (1 * 60 * 1000)) {
    
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
      
    }
  } 

}

componentDidMount(){
    Axios.get('/getevents')
    .then(res=>{
this.setState({
    eventList:res.data.response
    
})

    }).catch(err=>console.log(err));
}
render(){
    if(!this.state.redirect)
    return <Redirect to="/signin"/>
    return(
        <div>
            <Link to="/signout" className="signout">Signout</Link>
            <div className="row">
            {this.state.eventList.map(data=>(
  <div className="col-md-3">
                <Card key={data._id} eventname={data.eventname} eventdate={data.eventdate} eventtype={data.eventtype} eventorganizer={data.eventorganizer}/>
       </div>
            ))}
            </div>         
        </div>
    )
}

}

export default NewEvent;