import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Popup from './Popup';
import UserMain from './UserMain';
import Contact from './Contact';
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={[<Nav/>,<Main/>,<Footer/>]}/>
      <Route path='/contact' element={[<Nav/>,<Contact/>,<Footer/>]}/>
      </Routes>
    </BrowserRouter>

    {/* <Nav/> */}
    {/* <Contact/> */}
    {/* <Main/> */}
    {/* <Footer/> */}

    </>
   
    
  );
}

export default App;
