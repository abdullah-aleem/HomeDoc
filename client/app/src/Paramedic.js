import React from 'react'
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


// function showNotification() {
//     if (Notification.permission === "granted") {
//       new Notification("Hello World!");
//     } else if (Notification.permission !== "denied") {
//       Notification.requestPermission().then(permission => {
//         if (permission === "granted") {
//           new Notification("Hello World!");
//         }
//       });
//     }
//   }
  
function Paramedic() {
    const [list, setList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const newDivRef = useRef(null);
    function handleClick() {
        setIsOpen(true);
        if (newDivRef.current !== null) {
          newDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }

return (
    <div style={{backgroundColor:"black"}}>
          <div className='row'>
            <div className='col-sm-6' style={{marginLeft:"100px", marginTop:'100px', marginBottom: '50px'}}>
                <div className="container3 mt-3 mb-3" style={{color:"white"}}>
                    <h2>Paramedic's Info</h2>
                    <div className="card1" style={{width: '400px'}}>
                    <img className="card-img-top" src="download.png" alt="Card image" style={{width: '100%'}}/>
                    </div>
                    <div className="card-body">
                    <h4 className="card-title mt-3">UserName</h4>
                    <h4 className="card-text">Age</h4>
                    <a href="#" className="btn button" data-bs-toggle="modal" data-bs-target="#myModal1" style={{width: '400px'}}>More...</a>
                  
                    </div>
                </div>
            </div>
            <div className='col-sm-4'>
                <button className='notify' onClick={handleClick}>
                    <span>Notifications</span>
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <div className='rightside'>
                    <p className='rightbox'>Call our skilled paramedics at your doorstep and set up meetings with super-talented doctors to get the best medcare</p>
                </div>   
            </div>
          </div>
          <div class="modal" id="myModal1">
            <div class="modal-dialog">
              <div class="modal-content .my-custom-class" style={{backgroundColor: 'rgb(47, 44, 44)', color: 'white'}}>
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
                <div ref={newDivRef} id="newDiv" className='listdocs' style={{height: '100px'}}>
                    <p style={{color: 'whitesmoke'}}>List it empty so nothing is appearing</p>
                    <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    </ul>
                </div>
            )}
    </div>
    )
}

export default Paramedic
