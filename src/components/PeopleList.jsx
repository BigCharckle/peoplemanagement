import React from 'react'

const PeopleList = ({data}) => {
  return (  
    <div>
        <h1>People List</h1>
        <table className='table'>
        <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>   
            <th>Status</th>
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
                <td>{item.status && (<input type="radio" name={item.id} checked id={item.id} onChange={()=>{}} />)}
                    {!item.status && (<input type="radio" name={item.id} id={item.id} onChange={()=>{}} />)}
                </td>                
            </tr>
        ))}
  </tbody>
</table>
</div>
  ) 
}
export default PeopleList  