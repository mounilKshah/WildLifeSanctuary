import React from 'react';


const Navbar = (props) => {
  return (
    <div className = 'fl w-100 pa2'>
    	<header class="w-100 black-80 tc pv4 avenir">
		  <nav class="bt bb tc mw7 center mt4">
		    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/">Home</a>
		    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/map">Map</a>
		    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/animals">Animals</a>
		    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/about">About</a>
		    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
		  </nav>
		</header>
    </div>
  )
}


export default Navbar;