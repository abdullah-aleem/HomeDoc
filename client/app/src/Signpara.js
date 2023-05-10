import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Signpara() {

    const showCoordinatesCheckbox = document.getElementById('show-coordinates');
    const[location,setLocation]=useState({
        latitude:null,
        longitude:null,
    })

    //setting up state variables for signup form of paramedic
        const [fname, FirstName] = useState('');
        const [lname, LastName] = useState('');
        const [email, setEmail] = useState('');
        const [pno, setNumber] = useState('');
        const [password, setPassword] = useState('');
        const [gender, setGender] = useState('');
        const [exp, setExperience] = useState('');
        const [pncNo, setPNCno] = useState('');

    //function for signup of the paramedic
  const signUp = (e) => {
    //e.preventDefault();
    fetch('http://localhost:8080/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Fname: fname,
        Lname: lname,
        Email: email,
        Contact: parseInt(pno),
        Password: password,
        Gender: gender,
        Experience: parseInt(exp),
        PNCno: pncNo,
        Longitude: location.longitude,
        Latitude: location.latitude
      }),

    })
    console.log('signup is working')
    document.getElementById("signup_form").reset();
  }


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
    <div className='listdocs'>
            <div class="container contact mt-3">
            <h2>Sign up</h2>
            <form action="/action_page.php">
              <div class="mb-3">
                <input type="text" class="form-control" id="nam" placeholder="First name" name="nam" onChange={(event) => FirstName(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="nam" placeholder="Last name" name="nam" onChange={(event) => LastName(event.target.value)}/>
              </div>
              <div class="mb-3 mt-3">
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={(event) => setEmail(event.target.value)}/>
              </div>
              <div class="mb-3 mt-3">
                <input type="tel" class="form-control" id="num" placeholder="Enter phone number" name="num" onChange={(event) => setNumber(event.target.value)}/>
              </div>
              <div class="mb-3 mt-3">
                <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={(event) => setPassword(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="gen" placeholder="Gender" name="gen" onChange={(event) => setGender(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="exper" placeholder="Experience" name="exper" onChange={(event) => setExperience(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="pnc" placeholder="PNC number" name="pnc" onChange={(event) => setPNCno(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="checkbox" id="show-coordinates"  onChange={handleCheckboxChange}/>
                <p>Allow current location</p>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="longitude" placeholder="longitude" name="longitude" value={showCoordinatesCheckbox?.checked ? location.longitude : ''} readOnly/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="lat" placeholder="latitude" name="lat" value={showCoordinatesCheckbox?.checked ? location.latitude : ''} readOnly/>
              </div>
              
              <button type="submit" class="btn button">Create Account</button>
            </form>
          </div>
          </div>
    )
  }


export default Signpara