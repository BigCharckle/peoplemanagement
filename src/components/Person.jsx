import React, { useState, useEffect }  from "react";
import axios from 'axios';
import { useFormik } from "formik";
import * as Yup from "yup";
import './modal.css';

export default function Person(props){

    const modal = document.getElementById("myModal");
    const closeModal = () => {
        modal.style.display = "none";
        formik.resetForm();
      };
    const [newData, setNewData] = useState({});

    const {message, setMessage} = props; 

    useEffect(() => {
      if (newData != undefined)  
      if (newData.id>0)
      {
        formik.resetForm();
        //setCloseForm(true);
        modal.style.display = "none";
      }

    }, [newData]);
    
      const formik = useFormik({
        initialValues: {
          first_name: "",
          last_name: "",                    
          email: "",
          gender: "",
          status: ""
        },
        validationSchema: Yup.object().shape({
          email: Yup.string()
            .email("Invalid email address")
            .required("Please enter email"),
          first_name: Yup.string().required("Please enter first name"),
          last_name: Yup.string().required("Please enter last name"),
          gender: Yup.string().required("Please select gender")
        }),
        onSubmit: (person) => {
          axios.post('peopleapi/person/add', person)
          .then(response => 
            {
              setNewData(response.data);
              setMessage("New person created, name： " + person.first_name + ' ' + person.last_name)
            });
          //.catch(err => { 
          //    setErrorMessage(err.errorMessage) ;
          //    //console.error(err);
          //});
     
        }
      });


    return (
    <div className='modal-content' id='myModal' >
        
        <span class="close" onClick = {() => closeModal()} >&times;</span>

        <h2>New person</h2>
        <form onSubmit={formik.handleSubmit} >
        <div class="form-group">
            <label>First Name
            <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.first_name}            
            />
            </label>
        </div>
        {formik.touched.first_name && formik.errors.first_name ? (
          <span className="error">{formik.errors.first_name}</span>
        ) : null}               
        <div class="form-group">
            <label for="last_name">Last Name
            <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.last_name}              
            />
            </label>
        </div>
        {formik.touched.last_name && formik.errors.last_name ? (
          <span className="error">{formik.errors.last_name}</span>
        ) : null}           
        <div class="form-group">
            <label for="email">Email
            <input type="email" class="form-control" name="email" id="email" placeholder="Email" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            </label>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}        
        <div class="form-group">
          <label class="form-check-label" > Gender
          <div class="form-check">    
          <input class="form-check-input" type="radio" name="gender" id="gender1" value="Male"
            checked={ formik.values.gender === "Male"}          
            onChange={() => formik.setFieldValue("gender", "Male")}
          />
          <label class="form-check-label" for="gender1"> Male</label>
          </div>
          <div class="form-check">    
          <input class="form-check-input" type="radio" name="gender" id="gender2" value="Female"
            checked={ formik.values.gender === "Female"}               
            onChange={() => formik.setFieldValue("gender", "Female")}
          />
          <label class="form-check-label" for="gender2"> Female </label>
          </div>
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender ? (
          <span className="error">{formik.errors.gender}</span>
        ) : null}     
        <div class="form-group">
          <label class="form-check-label"> Status</label>
          <div class="form-check">
          <input class="form-check-input" type="radio" name="status" id="status1" value="True" 
            checked={ formik.values.status === "True"}
            onChange={() => formik.setFieldValue("status", "True")}
          />
          <label class="form-check-label" for="status1"> On</label>
          </div>
          <div class="form-check">    
          <input class="form-check-input" type="radio" name="status" id="status2" value="False"
            checked={ formik.values.status === "False"}
            onChange={() => formik.setFieldValue("status", "False")}
          />
          <label class="form-check-label" for="status2" > Off </label>
        </div>
        </div>        
        <button type="submit" class="btn btn-primary">Submit</button>  &nbsp;&nbsp;
        <button type="button" class="btn btn-primary" onClick = {() => closeModal()}>Close</button> &nbsp;&nbsp;
        <button type="reset" class="btn btn-primary" onClick={formik.resetForm}>Reset</button>
      </form>
        
    </div>

    );
}

