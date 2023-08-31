// import React libraries and components
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import CSS and Bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

// Define App component
function App() {
  return (
    <div className="App">
        <Header />
        <div className='container mt-5'>
          <Outlet />
        </div>
        <Footer />
    </div>
  );
}

export default App;
