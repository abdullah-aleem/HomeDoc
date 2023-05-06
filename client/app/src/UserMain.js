import React from 'react'
import Popup from './Popup'
import { useState, useRef } from 'react'

function UserMain() {
  const [isOpen, setIsOpen] = useState(false);
  const newDivRef = useRef(null);

  function handleButtonClick() {
    setIsOpen(true);
    if (newDivRef.current !== null) {
      newDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
    

  return (
    <div style={{backgroundColor:"black"}}>
       <div class="row">
            
                    <div  style={{color:"white"}}><button className='btn button1'  style={{marginLeft:"1000px"}} onClick={handleButtonClick}>Find Paramedic <svg viewBox="0 0 24 24" width="45" height="30" fill="white">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 17 9.5 6.5 6.5 0 1 0 9.5 17c1.85 0 3.53-.78 4.72-2.03l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5a4.5 4.5 0 0 1-4.5 4.5z" />
      </svg></button></div>
          </div>
          <div class="row">
                    
                    <div style={{color:"white"}}><button className='btn button1'  style={{marginLeft:"1000px"}}>Find Specialist <svg viewBox="0 0 24 24" width="45" height="30" fill="white">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 17 9.5 6.5 6.5 0 1 0 9.5 17c1.85 0 3.53-.78 4.72-2.03l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5a4.5 4.5 0 0 1-4.5 4.5z" />
      </svg></button></div>
          </div>
          <div className='row'>
            <div className='col-sm-6' style={{marginLeft:"100px"}}>
                <div className="container mt-3 mb-3" style={{color:"white"}}>
                    <h2>User's Info</h2>
                    <div className="card1" style={{width: '400px'}}>
                    <img className="card-img-top" src="download.png" alt="Card image" style={{width: '100%'}}/>
                    </div>
                    <div className="card-body">
                    <h4 className="card-title mt-3">UserName</h4>
                    <h4 className="card-text">Age</h4>
                    <a href="#" className="btn button" data-bs-toggle="modal" data-bs-target="#myModal" >More...</a>
                  
                    </div>
                </div>
            </div>
            <div className='col-sm-4'>
                <div className='rightside'>
                  <p className='rightbox'>Call our skilled paramedics at your doorstep and set up meetings with super-talented doctors to get the best medcare</p>
                </div>
            </div>
          </div>

          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">More details</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  onMouseEnter={(e) => e.target.style.backgroundColor = 'red'} 
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'initial'}></button>
                    
                </div>
                
                <div class="modal-body">
                  <div class="row">
                    <div className='col-sm-4'><label>Name</label></div>
                    <div className='col-sm-8'><p>Mahnoor Ijaz</p></div>
                  </div>
                  <div class="row">
                    <div className='col-sm-4'><label>Phone #</label></div>
                    <div className='col-sm-8'><p>03089322</p></div>
                  </div>
                  <div class="row">
                    <div className='col-sm-4'><label>E-mail</label></div>
                    <div className='col-sm-8'><p>mijaz62@gmail.com</p></div>
                  </div>
                  <div class="row">
                    <div className='col-sm-4'><label>Gender</label></div>
                    <div className='col-sm-8'><p>female</p></div>
                  </div>
                  <div class="row">
                    <div className='col-sm-4'><label>Age</label></div>
                    <div className='col-sm-8'><p>20</p></div>
                  </div>
                  
                    
                </div>
                

               </div>
            </div>

          </div>
          {isOpen && (
        <div ref={newDivRef} id="newDiv" className='listdocs'>
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>
      
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="row">
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row">
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row">
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
          <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="./download.png" alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">See Profile</a>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
      </div>
          
        </div>
      )}
          
        </div>
  

  )
}

export default UserMain