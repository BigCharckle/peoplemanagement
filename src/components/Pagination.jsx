import React, { useState } from 'react';
import Person from "./Person";
import './modale.css';
const Pagination = ({ nPages, currentPage, setCurrentPage, data, setData }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    var modal = document.getElementById("myModal");
    var overlay = document.getElementById("overlay");
    const openModal = () => {
        overlay.style.display = "block";
        modal.style.display = "block";
      };
    const newArr = [];
    while(pageNumbers.length) newArr.push(pageNumbers.splice(0,20));
    return (
        <div>
                <button class="btn btn-primary" onClick={()=>openModal()} > 
                Add New
                </button>
            <div className='pagination justify-content-center'>
                <div>Current page: {currentPage}</div>
                <div>
                <div id="overlay" className="overlay">
                </div>
                    <div id="myModal" className="modal">
                        <Person Data = {data} setData={setData} ></Person>     
                    </div> 
                </div>
            </div>
            <nav>
            {newArr.map(pgRow =>(
            <ul key={pgRow} className='pagination justify-content-center'>
                {pgRow.map(pgNumber => (
                    <li key={pgNumber}  >
                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href='#'>
                            {pgNumber}
                        </a>
                    </li>
                ))}
            </ul>    
            ))}
            </nav>
        </div>
        
    )
}
export default Pagination