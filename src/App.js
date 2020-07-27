import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AppBar from './AppBar';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  return (
   <Router>
     <AppBar />
     <Routes>
       <Route path='/' element={<Home />}  />
       <Route path='/about' element={<About />}  />
       <Route path='/contact' element={<Contact />}  />
       <Route path='/signin' element={<SignIn />}  />
       <Route path='/signup' element={<SignUp />}  />
       
       <Route path='*' element = 'Page not found' />
     </Routes>
   </Router>
  );
}

export default App;
