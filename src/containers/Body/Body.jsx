import React from'react';

import Main from './Main/Main';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Body = () => {

    return(
        <div>
          <Main />
          <About />
          <Projects />
          <Contact />
        </div>
    );

}

export default Body;