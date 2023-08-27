// import React libraries and components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Import CSS and Bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

// Define App component
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container mt-5'>
          <Routes>
            <Route path='/Delia-Young-Portfolio' element={<About />} />
            <Route path='/Delia-Young-Portfolio/portfolio' element={<Portfolio />} />
            <Route path='/Delia-Young-Portfolio/contact' element={<Contact />} />
            <Route path='/Delia-Young-Portfolio/resume' element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
