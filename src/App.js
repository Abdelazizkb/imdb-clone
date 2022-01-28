import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToDay from './components/ToDay';
import Scroll from './components/Scroll';
import WhatToWatch from './components/WhatToWatch';
import Favorites from './components/Favorites';
import Prime from './components/Prime';
import Exclusive from './components/Exclusive';
import More from './components/More';
import Explore from './components/Explore';
import Soon from './components/Soon';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <ToDay/>
        <WhatToWatch/>
        <Favorites/>
        <More/>
        <Exclusive/>
        <Prime/>
        <Explore/>
        <Soon/>
        <Footer/>
    </div>
  );
}

export default App;
