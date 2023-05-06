import React from 'react'
import Popup from './Popup'
import { Link } from 'react-router-dom';
import { useState } from 'react'


export default function Nav() {
  const [buttonPopup,setButtonPopup]=useState(false);
  const [buttonPopup1,setButtonPopup1]=useState(false);
  return (
    <div>
    <div className="bg-head">
          <div className="pic">
          <img src="logoo.png"  alt="logo" width="130px" height="130px"/>
          </div>
          <div className="heading">
          <h1><i>Healthcare at your doorstep!</i></h1>
          </div>
        </div>
    <nav className="navbar navbar-expand-sm ">
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
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Register</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">As an intern</a></li>
                    <li><a className="dropdown-item" href="#" onClick={()=>setButtonPopup1(true)}>As a healthcare worker</a></li>
                    <Popup trigger={buttonPopup1}>
        
                        <div className="email1">
                        <form action="/action_page.php">
                        <h1 style={{padding:"30%"}}>Sign Up</h1>
                          <div className="mb-3">
                            <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" />
                          </div>
                          <div className="mb-3 mt-3">
                            <input type="age" className="form-control" id="age" placeholder="Enter age" name="age" />
                          </div>
                          <div className="mb-3 mt-3">
                            <input type="gender" className="form-control" id="gender" placeholder="Select gender" name="gender" />
                          </div>
                          <div className="mb-3 mt-3">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                          </div>
                          <div className="mb-3">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                          </div>
                          <button className="btn btn-primary ml-3" type="button" >Login</button>
                        </form>
                      </div>
                    </Popup>
                    <li><a className="dropdown-item" href="#">Management team</a></li>
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
            <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login or Sign up</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  onMouseEnter={(e) => e.target.style.backgroundColor = 'red'} 
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}></button>
                    
                </div>
                
                <div class="modal-body">
                <div className="email1">
                  <form action="/action_page.php">
                  <h1 style={{padding:"30%"}}>Login</h1>
                    <div className="mb-3 mt-3">
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                    </div>
          <button className="btn btn-primary ml-3" type="button" >Login</button>
          
        </form>
        </div>
                  <div class="row">

                    <div className='col-sm-4'><button className="btn btn-primary" type="button" onClick={()=>setButtonPopup(true)}>Login</button></div>
                    <div className='col-sm-8'><button className="btn btn-primary" type="button" onClick={()=>setButtonPopup(true)}>Sign Up</button></div>
                  </div>
                 
                  
                    
                </div>
                

               </div>
            </div>

          </div>
           
        
        <Popup trigger={buttonPopup}>
        
        
        </Popup>
      
          </div>
        </nav>
        </div>
  )
}
