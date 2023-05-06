import React from 'react'


export default function footer() {
  return (
    <footer className="bg-dark text-light py-3">
    <div className="container1">
      <div className="row">
        <div className="col-md-4">
          <p>&copy; HomeDoc 2023</p>
        </div>
        <div className="col-md-4">
          <p style={{padding_left: "15%"}}>Contact us: <i className="fab fa-whatsapp"></i> +92 331 6334020</p>
        </div>
        <div className="col-md-4">
          <p style={{padding_left: "200px"}}>Designed by MIA</p>
        </div>
      </div>
    </div>
  </footer>
  )
}
