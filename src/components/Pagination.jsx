import React, { useState, useEffect } from 'react';
import Person from "./Person";
import ReactPaginate from 'react-paginate';
import './modal.css';

const Pagination = ({ nPages, currentPage, setCurrentPage, message, setMessage }) => {

    var modal = document.getElementById("myModal");
    const [closeForm, setCloseForm] = useState(false);
    const openModal = () => {
        modal.style.display = "block";
      };
      const closeModal = () => {
        modal.style.display = "none";
      };

      useEffect(() => {
        if (closeForm) 
        closeModal();
      }, [closeForm]);

    const handleClick = async (data) => {
        setCurrentPage(data.selected + 1);
      };

    return (
        <div>
            <button class="btn btn-primary" onClick={()=>openModal()} > 
                Add New
            </button>
            <div className='pagination justify-content-center'>
                <div>Current page: {currentPage}</div>
            </div>

        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={nPages}
        marginPagesDisplayed={4}
        pageRangeDisplayed={2}
        onPageChange={handleClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"page-link"}
      />
            <Person id="myModal" message={message} setMessage={setMessage}   ></Person>
        </div>
        
    )
}
export default Pagination