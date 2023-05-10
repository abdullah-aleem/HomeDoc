import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Signpat from './Signpat';
import Main from './Main';
import UserMain from './UserMain';
import Signpara from './Signpara';
import Contact from './Contact';
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Paramedic from './Paramedic';
import { useState } from 'react'
import Admin from './Admin';

function App() {

  return ( 
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={[<Nav/>,<Main/>,<Footer/>]}/>
      <Route path='/signPara' element={[<Nav/>,<Signpara/>,<Footer/>]}/>
      <Route path='/signPat' element={[<Nav/>,<Signpat/>,<Footer/>]}/>
      <Route path='/user' element={[<Nav/>,<UserMain/>,<Footer/>]}/>
      <Route path='/para' element={[<Nav/>,<Paramedic/>,<Footer/>]}/>
      <Route path='/contact' element={[<Nav/>,<Contact/>,<Footer/>]}/>
      <Route path='/admin' element={[<Nav/>,<Admin/>,<Footer/>]}/>
      </Routes>
    </BrowserRouter>

    </>
    
  );
}

export default App;