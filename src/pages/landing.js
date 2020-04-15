import React from 'react';
import Navbar from '../components/landing/Navbar/Navbar';
import Footer from '../components/landing/Footer/Footer';
import Article from '../components/landing/Article/Article';
function Landing() {
  return (
    <div >
      <Article className = 'fl w-100 pa2'/>
      <Footer/>
    </div>
  );
}

export default Landing;
