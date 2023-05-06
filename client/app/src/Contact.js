import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import './App.css'


export default function Contact() {
        return (
    
            <div class="container contact mt-3">
            <h2>Contact</h2>
            <form action="/action_page.php">
              <div class="mb-3">
                <input type="text" class="form-control" id="nam" placeholder="Enter name" name="nam"/>
              </div>
              <div class="mb-3 mt-3">
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
              </div>
              <div class="mb-3 mt-3">
                <input type="tel" class="form-control" id="num" placeholder="Enter phone number" name="num"/>
              </div>
              <div class="mb-3 mt-3">
                <input type="text" class="form-control" id="msg" placeholder="Enter message" name="msg"/>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
            )
}


