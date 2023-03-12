import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PeopleList from './components/PeopleList';
import Pagination from './components/Pagination';
function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(null);    
// User is currently on this page
const [currentPage, setCurrentPage] = useState(1);
// No of Records to be displayed on each page   
const recordsPerPage = 10;
  useEffect(() => {
    axios.get('peopleapi/person/getall').then(response => setData(response.data));
  }, [data]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage)
  return (
    
    <div>
      <div className='container mt-5'>
            <PeopleList data={currentRecords} message={message} setMessage={setMessage} />
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                data = {data}
                setData = {setData}
                message={message} 
                setMessage={setMessage}
            />
      </div>
    </div>
  );
}
export default App;
