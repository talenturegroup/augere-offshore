import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';

function App() {
  const { pathname } = useLocation();

  const ScrollToTop = function ({ children }) {
    useLayoutEffect(() => {
      window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
    }, [pathname]);
    
    return children;
  }

  return (
    <ScrollToTop>
      <div className="App">
        <Navbar/>
          <Home/>
        <Footer/>
      </div>
    </ScrollToTop>
  );
}

export default App;
