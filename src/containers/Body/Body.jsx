import React from'react';
import useScrollSnap from 'react-use-scroll-snap';

import Main from './Main/Main';
import About from './About/About';
import Projects from './Projects/Projects';

import './body.css'

const Body = () => {

    const scrollRef = React.useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

    return(
        <div ref={scrollRef}>
          <Main />
          <About />
        </div>
    );

}

export default Body;