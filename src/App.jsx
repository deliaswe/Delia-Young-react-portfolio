// import React libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// import CSS and Bootstrap styling
import bootstrap/dist/css/bootstrap.min.css;
import './style/App.css';

// define App component
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Navigation /> */}
        <{/* <Header/> */}
        <div className='container mt-5'>
          <Routes>
            <Route path='/Delia-Young-Portfolio' element={<About />} />
            {/* <Route path='/Delia-Young-Portfolio' element={<Portfolio />} /> */}
            <Route path='/Delia-Young-Portfolio' element={<About />} />
            <Route path='/Delia-Young-Portfolio' element={<Portfolio/>} />
            <Route path='/Delia-Young-Portfolio' element={<Contact />} />
            <Route path='/Delia-Young-Portfolio' element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

// render the Footer component
export default App;
