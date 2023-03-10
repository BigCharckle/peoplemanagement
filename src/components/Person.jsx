import React from "react";
import { useState } from 'react';
import axios from 'axios';
import './modale.css';

export default function Person(props){

    const modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    const closeModale = () => {
        overlay.style.display = "none";
        modal.style.display = "none";

      };
    const [newData, setNewData] = useState({});
    const [errorMessage, setErrorMessage] = useState();
    const {data, setData} = props;
    const handleChange = event => {
        setNewData({ ...newData, [event.target.name]: event.target.value });
      };
    
    const handleSubmit = event => {
        event.preventDefault();
        //setErrorMessage([]);
        axios.post('peopleapi/person/add', newData)
        .then(response => 
          {
            setData([...data, response.data]);
          })
        .catch(err => { 
            setErrorMessage(err.errorMessage) ;
        });
   
        setNewData([]);

    };

    return (
    <div className='modal-content' id='myModal' >
        
        <span class="close" onClick = {() => closeModale()} >&times;</span>

        <h2>Add New</h2>
        { errorMessage && <div className="alert alert-danger"> { errorMessage } </div> }        
        <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name" value={newData.first_name || ''} onChange={handleChange} />
        </div>
        <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name" value={newData.last_name || ''} onChange={handleChange} />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" name="email" id="email" placeholder="Email" value={newData.email || ''} onChange={handleChange} />
        </div>
        <div class="form-group">
        <label class="form-check-label" for="gender1"> Gender</label>
          <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="gender1" value="Male" onClick={handleChange} onChange={handleChange} />
          <label class="form-check-label" for="gender1"> Male</label>
          </div>
          <div class="form-check">    
          <input class="form-check-input" type="radio" name="gender" id="gender2" value="Famale"  onClick={handleChange} onChange={handleChange} />
          <label class="form-check-label" for="gender2"> Female </label>
        </div>
        </div>
        <div class="form-group">
        <label class="form-check-label" for="status1"> Status</label>
          <div class="form-check">
          <input class="form-check-input" type="radio" name="status" id="status1" value="true" onClick={handleChange} onChange={handleChange} />
          <label class="form-check-label" for="status1"> On</label>
          </div>
          <div class="form-check">    
          <input class="form-check-input" type="radio" name="status" id="status2" value="false" onClick={handleChange}  onChange={handleChange} />
          <label class="form-check-label" for="status2" > Off </label>
        </div>
        </div>        
        <button type="submit" class="btn btn-primary">Submit</button>  &nbsp;&nbsp;
        <button type="button" class="btn btn-primary" onClick = {() => closeModale()}>Close</button>
      </form>
        
    </div>

    );
}

