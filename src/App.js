import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Homepgfront from './components/Homepgfront';
import Frontmenu from './components/Frontmenu';
import Frontservices from './components/Frontservices';
import Frontabout from './components/Frontabout';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Feedback from './components/Feedback';
import Stats from './components/Stats';
import Booking from './components/Booking';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');


  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <>
            <Homepgfront onPageChange={handleNavigation}/>
            <Frontmenu onPageChange={handleNavigation}/>
            <Frontservices />
            <Frontabout onPageChange={handleNavigation}/>
            <Feedback />
          </>
        );
      case 'Menu':
        return <Menu />;
      case 'About Us':
        return (
          <>
            <Frontabout onPageChange={handleNavigation}/>
            <Stats />
            <Feedback />
          </>
        );
      case 'Book Table':
        return <Booking />;
      default:
        return (
          <>
            <Homepgfront />
            <Frontmenu />
            <Frontservices />
            <Frontabout onPageChange={handleNavigation}/>
            <Feedback />
          </>
        );
    }
  };

  return (
    <>
      <Navbar onPageChange={handleNavigation} />
      {renderPage()}
      <Footer onPageChange={handleNavigation}/>
    </>
  );
}

export default App;
