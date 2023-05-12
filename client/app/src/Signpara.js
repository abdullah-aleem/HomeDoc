import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Signpara() {

   //setting up state variables for signup form of paramedic
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [contact, setContact] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [gender, setGender] = useState("");
   const[pnc,setPnc]=useState("");
   const [experience, setExperience] = useState("");
   const[error,setError]=useState("");
   var flag=false;
 

  //validation of signup form
   useEffect(() => {
    if (fname.length === 0) {
      setError('Name is empty/special characters are used');
    } else if (lname.length === 0) {
      setError('Name is required');
    } else if (isNaN(contact)) {
      setError('Contact is out of bounds');
    } else if (password.length < 6) {
      setError('Password is too short');
    } else {
      setError('');
      flag = true;
    }
  }, [fname, lname, contact, password]);
 
  let navigate=useNavigate();
  const errorDisplay=()=>{
    alert(error);
  }
   //function for signup of the paramedic
   function SignDoc () {
    //  e.preventDefault();
     fetch('http://localhost:8080/doc/signup', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         Fname: fname,
         Lname: lname,
         Contact: parseInt(contact),
         Email: email,
         Password: password,
         Gender: gender,
         Experience:parseInt(experience),
         PNCno:pnc,
         Longitude: location.longitude,
         Latitude: location.latitude
       }),

 
     })
     console.log('signup is working')
     navigate("/create")
     
   }

    const showCoordinatesCheckbox = document.getElementById('show-coordinates');
    const[location,setLocation]=useState({
        latitude:null,
        longitude:null,
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
    <div className='listdocs'>
            <div class="container contact mt-3">
            <h2>Sign up</h2>
            <form id='signup_doc'>
              <div class="mb-3">
                <input type="text" class="form-control" id="nam" placeholder="First name" name="nam" onChange={(event) => setFname(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="nam" placeholder="Last name" name="nam" onChange={(event) => setLname(event.target.value)}/>
              </div>
              <div class="mb-3 mt-3">
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={(event) => setEmail(event.target.value)}/>
              </div>
              <div class="mb-3 mt-3">
                <input type="tel" class="form-control" id="num" placeholder="Enter phone number" name="num" onChange={(event) => setContact(event.target.value)}/>
              </div>
              <div class="mb-3 mt-3">
                <input type="text" class="form-control" id="pwd" placeholder="Enter password" name="pwd"onChange={(event) => setPassword(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="gen" placeholder="Gender" name="gen" onChange={(event) => setGender(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="ex" placeholder="experience" name="ex"onChange={(event) => setExperience(event.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="pnc" placeholder="PNC number" name="pnc"onChange={(event) => setPnc(event.target.value)}/>
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
              
              <button type="submit" class="btn button" 
               data-bs-config="{backdrop:true}"
               onClick={() => {
                 if (flag) {
                    SignDoc();
                    document.getElementById("signup_doc").reset();
                   console.log("yeeehaahaah")
                 } else {
                   errorDisplay();
                    console.log("shutup");
                   }
               }}
              >Create Account</button>
            </form>
          </div>
          </div>
  )
}

export default Signpara