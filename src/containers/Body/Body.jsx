import React from'react';

import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Body = () => {

    return(
        <div>
          <Header />
          <About />
          <Projects />
          <Contact />
        </div>
    );

}

export default Body;