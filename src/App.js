import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Menu from './pages/menu';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resizeeddddd');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
