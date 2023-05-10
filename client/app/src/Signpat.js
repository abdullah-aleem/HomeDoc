import React from 'react'
import { useState, useEffect } from 'react';

function Signpat() {

  //setting up state variables for signup form of user/patient
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  var error;
  var flag=false;


  //validation of fname
  if (fname.length === 0) {
    error = 'name is empty/special characters are used'
  }
  //validation of lname
  else if (lname.length === 0) {
    error = 'Name is required';
  }
  //validation of contact
  else if (contact.isNaN) {
    error = 'contact is out of bound'
  }
  //validation of email

  //validation of password
  else if (password.length < 6) {
    error = 'password is too short'
  }
  else {
    flag = true;
  }

<div class="modal" id="myModal5">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p id='displayerror'></p>
      </div>
    </div>
  </div>
</div>

  const displayError=(e)=>{
    e.preventDefault();
    var display=document.getElementById("displayerror");
    display.innerHTML(error);
    console.log(error);
 

  }
  //function for signup of the patient
  const signUp = (e) => {
    //e.preventDefault();
    fetch('http://localhost:8080/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Fname: fname,
        Lname: lname,
        Contact: parseInt(contact),
        Email: email,
        Password: password,
        Gender: gender,
        DOB: parseInt(age),
        Longitude: location.longitude,
        Latitude: location.latitude
      }),

    })
    console.log('signup is working')
    document.getElementById("signup_form").reset();
  }


  const showCoordinatesCheckbox = document.getElementById('show-coordinates');
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  })

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      setLocation({
        latitude: null,
        longitude: null,
      });
    }
  };




  return (
    <div className='listdocs'  >
      <div class="container contact mt-3" >
        <h2>Sign up</h2>
        <form id='signup_form'>
          <div class="mb-3">
            <input type="text" class="form-control" id="nam" placeholder="First name" name="nam" onChange={(event) => setFname(event.target.value)} />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="nam" placeholder="Last name" name="nam" onChange={(event) => setLname(event.target.value)} />
          </div>
          <div class="mb-3 mt-3">
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div class="mb-3 mt-3">
            <input type="tel" class="form-control" id="num" placeholder="Enter phone number" name="num" onChange={(event) => setContact(event.target.value)} />
          </div>
          <div class="mb-3 mt-3">
            <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="gen" placeholder="Gender" name="gen" onChange={(event) => setGender(event.target.value)} />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="age" placeholder="Age" name="age" onChange={(event) => setAge(event.target.value)} />
          </div>
          <div class="mb-3">
            <input type="checkbox" id="show-coordinates" onChange={handleCheckboxChange} />
            <p>Allow current location</p>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="longitude" placeholder="longitude" name="longitude" value={showCoordinatesCheckbox?.checked ? location.longitude : ''} readOnly />
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="lat" placeholder="latitude" name="lat" value={showCoordinatesCheckbox?.checked ? location.latitude : ''} readOnly />
          </div>

          <button type="submit" class="btn button" data-bs-toggle="#modal" data-bs-target="#myModal5"
          data-bs-config="{backdrop:true}"
          onClick={() => {
            if (flag) {
               signUp();
              console.log("yeeehaahaah")
            } else {
               displayError()
              }
          }}
          
          >Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Signpat
