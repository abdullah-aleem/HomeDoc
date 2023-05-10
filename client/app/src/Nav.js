import React from 'react'
import Popup from './Popup'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


export default function Nav() {
  // const [buttonPopup,setButtonPopup]=useState(false);
  // const [buttonPopup1,setButtonPopup1]=useState(false);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[aemail,setAemail]=useState("");
  const[apassword,setApassword]=useState("");
  const[pemail,setPemail]=useState("");
  const[ppassword,setPpassword]=useState("");
  const[popup,setPopup]=useState(false);
  let navigate=useNavigate();

  function ClickLogin () {
    fetch('http://localhost:8080/user/signin',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password}),
    })
    .then(response => response.json())
    .then(data=>{
      if(data.message==="hello"){
        navigate('/user')
      }
      else{
        setPopup('true');
      }
    })
    .catch(error => console.error(error))
    document.getElementById("login_para").reset();
  }
  function LoginPara () {
    fetch('http://localhost:8080/doc/signin',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: pemail,
        Password: ppassword}),
    })
    .then(response => response.json())
    .then(data=>{
      if(data.message==="im a doctor"){
        navigate('/para')
      }
      else{
        setPopup('true');
      }
    })
    .catch(error => console.error(error))
    document.getElementById("login_para").reset();
  }
  
  function LoginAdmin(){
    fetch('http://localhost:8080/admin/signin',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: aemail,
        Password: apassword}),
    })
    .then(response => response.json())
    .then(data=>{
      if(data.message==='in'){
        navigate('/admin')
      }
      else{
        setPopup('true');
        
      }
    })
    .catch(error => console.error(error))
    document.getElementById("login_admin").reset();
  }
  const closePopup = () => {
    setPopup(false);
  };




  return (
    <div>
    <div className="bg-head" style={{backgroundColor: 'black'}}>
          <div className="pic">
          <img src="logooo.png"  alt="logo" width="130px" height="130px"/>
          </div>
          <div className="heading">
          <h1><i>Healthcare at your doorstep!</i></h1>
          </div>
        </div>
    <nav className="navbar navbar-expand-sm " id='navi'>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                   <Link to ="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Signin / Signup</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"  data-bs-toggle="modal" data-bs-target="#myModal_para">Paramedic</a></li>
                    <li><a className="dropdown-item" href="#"  data-bs-toggle="modal" data-bs-target="#myModal_admin">Admin</a></li>
  
                  </ul>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#" role="button" data-bs-toggle="modal" data-bs-target="#myModal">Consult</a>
                </li>
                <li className="nav-item">
                <Link to ="/contact" className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Donate</a>
                </li> 
              </ul>
            </div>
            {/* modal prompt for user login/signup */}
            <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login or Sign up</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  onMouseEnter={(e) => e.target.style.backgroundColor = 'red'} 
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}></button>
                    
                </div>
                
                <div class="modal-body">
                  <form action="#" className='form1' id='login_user'>
                  <h1 style={{paddingInlineStart:"38%"}}>Login</h1>
                    <div className="mb-3 mt-3">
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  onChange={(event) => setPassword(event.target.value)}/>
                    </div >
                    <button className="btn  mt-3 mb-3" type="button" id='logsign_btn' data-bs-dismiss="modal" onClick={ClickLogin}>Login</button>
                    <h4 style={{paddingInlineStart:"28%"}}>create new account</h4>
                    <button className="btn  mt-3 mb-3" type="button" id='logsign_btn' data-bs-dismiss="modal" ><Link to="/signPat">Sign Up</Link></button>

          
                     </form>
                    
                </div>
                

               </div>
            </div>

          </div>
          {/* modal prompt for login/signup for paramedics */}
          <div class="modal" id="myModal_para">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login or Sign up</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  onMouseEnter={(e) => e.target.style.backgroundColor = 'red'} 
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}></button>
                    
                </div>
                
                <div class="modal-body">
                  <form action="/action_page.php" className='form1' id='login_para'>
                  <h1 style={{paddingInlineStart:"38%"}}>Login</h1>
                    <div className="mb-3 mt-3">
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={(event) => setPemail(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  onChange={(event) => setPpassword(event.target.value)}/>
                    </div >
                    <button className="btn  mt-3 mb-3" type="button" id='logsign_btn' data-bs-dismiss="modal" onClick={LoginPara}>Login</button>
                    <h4 style={{paddingInlineStart:"28%"}}>create new account</h4>
                    <button className="btn  mt-3 mb-3" type="button" id='logsign_btn' data-bs-dismiss="modal" ><Link to="/signPara">Sign Up</Link></button>

          
                     </form>
                    
                </div>
                

               </div>
            </div>

          </div>
          {/* modal prompt for login for admin */}
          <div class="modal" id="myModal_admin">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  onMouseEnter={(e) => e.target.style.backgroundColor = 'red'} 
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}></button>
                    
                </div>
                
                <div class="modal-body">
                  <form action="#" className='form1' id='login_admin'>
                  <h1 style={{paddingInlineStart:"38%"}}>Login</h1>
                    <div className="mb-3 mt-3">
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={(event) => setAemail(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  onChange={(event) => setApassword(event.target.value)}/>
                    </div >
                    <button className="btn  mt-3 mb-3" type="button" id='logsign_btn' data-bs-dismiss="modal"  onClick={LoginAdmin}>Login</button>
                     </form>
                   
                    
                </div>
                

               </div>
            </div>

          </div>
             
                     
      
          </div>
        </nav>
        {popup && (
        <div className="popup">
            <p>Login credentials are wrong!</p>
            <button onClick={closePopup}>okay</button>
        </div>
      )}
        </div>
  )
}