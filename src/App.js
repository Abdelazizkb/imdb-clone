import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToDay from './components/ToDay';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <ToDay/>

    </div>
  );
}

export default App;
