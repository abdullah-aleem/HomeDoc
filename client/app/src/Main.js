import React from 'react'
import Popup from './Popup'


function Main() {
  return (
    <div style={{backgroundColor: 'black'}}>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>

        <div className="carousel-inner rounded-5" style={{ position: 'relative' }}>
          <div className="carousel-item active">
            <img src="docs.jpeg" alt="Slide 1" height="500px" width="100%" style={{ filter: 'blur(1px)' }} />
            <div className="text">
              <p>
                <b>
                  <i>Assist<br /> patients in<br /> greatest<br /> needs!</i>
                </b>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="specialists.png" alt="Slide 2" height="500px" width="100%" />
          </div>
          <div className="carousel-item">
            <img src="kids.jpg" alt="Slide 3" height="500px" width="100%" />
          </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>

        <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <div className="info" style={{backgroundColor: 'rgb(141, 138, 138)'}}>
      <h3 className='sshhh'>About us</h3>
      <h2 style={{padding: '30px'}}> HomeDoc's online platform provides<br /> you with a network of healthcare<br /> professionals, including doctors,<br /> nurses, and other healthcare<br /> providers.
      </h2>
      <h3 className='sshhh'>Vision</h3>
      <p>We aim to breakdown barriers to healthcare access and provide high-quality care to underserved communities</p>
      <h3 className='sshhh'>Mission</h3>
      <p>To improve healthcare access and outcomes by leveraging technology to connect patients with healthcare providers regardless of distance and time constraints.</p>
      <h3 className='sshhh'>Core values</h3>
      <div className="container core">
        <div className="row">
          <div className="col-sm-6">
            <ul className="list-group">
              <p><b>Compassion</b></p>
              <p>Providing compassionate care focusing on the needs <br />of each patient</p>
              <p><b>Accessibility</b></p>
              <p>Providing access to high-quality healthcare services</p>
              <p><b>Expertise</b></p>
              <p>Providing licensed and experienced professionals <br /> with evidence-based care</p>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list-group">
              <p><b>Innovation</b></p>
              <p>Exploring latest technologies to provide healthcare<br /> delivery to our patients in the best possible way</p>
              <p><b>Patient-Centered care</b></p>
              <p>Providing personalized care meet their healthcare needs</p>
              <p><b>Transparency</b></p>
              <p>Honest communication and high standards of integrity</p>
            </ul>
          </div>
        </div>
      </div>
      <h3 style={{paddingLeft: '25%', paddingTop: '4%'}} className='sshhh'>Register to get latest updates about HomeDoc!</h3>
      <div className="email" style={{backgroundColor: 'rgb(47, 44, 44)'}}>
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    </div>

  )
}

export default Main