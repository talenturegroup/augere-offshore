import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;
