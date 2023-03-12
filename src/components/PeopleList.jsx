import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './CommonMessage.css';
const PeopleList = (props) => {
  const[dangerMessage, setDangerMessage] = useState(false);
  const ToggleStatus = (item) => {
    axios.post('peopleapi/person/togglestatus', item)
    .then(response => 
      {
        setMessage('Toggled status for ' + item.first_Name + ' ' + item.last_Name);
        setDangerMessage(false);
      });  
  }

  const DeleteRecord = (item) => {
    axios.post('peopleapi/person/delete', item)
    .then(response => 
      {
        setMessage('Deleted record ' + item.first_Name + ' ' + item.last_Name);
        setDangerMessage(true);
      });  
  }  
  const {data, message, setMessage} = props;    
  
  return (  
    <div>
        <h1>People List</h1>
        {message && !dangerMessage && (<div className="successMSG">{message}</div>)}
        {message && dangerMessage && (<div className="dangerMSG">{message}</div>)}
        <table className='table'>
        <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>   
            <th>Status</th>
            <th>Delete</th>            
        </tr>
        </thead>
        <tbody>
        {data.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first_Name}</td>
                <td>{item.last_Name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.status == "True" && (<input type="radio" name={item.id} checked id={item.id} disabled />)}
                    {item.status !="True" && (<input type="radio" name={item.id} id={item.id} disabled />)}{' '}
                    <Button variant="info" onClick = {() => ToggleStatus(item)}>Toggle</Button> 
                </td>   
                <td>
                    <Button variant="danger" onClick={() => { window.confirm( 'Are you sure you want to delete this record?', ) && DeleteRecord(item) }}>delete!</Button> 
                </td>                                
            </tr>
        ))}
  </tbody>
</table>
</div>
  ) 
}
export default PeopleList  