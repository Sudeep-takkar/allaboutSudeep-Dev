import React from 'react';
import Particles from 'react-particles-js';
import particleJson from '../particle.js';
import Typist from 'react-typist';
import imageBackground from '../luca-bravo-217276.jpg';

class AboutSudeep extends React.Component {
  render() {
    return (
      <div style={{
        height: '100%',
        background: `url(${imageBackground}) center / cover no-repeat transparent`,
        backgroundSize: 'cover'
      }}>
        <Particles params={particleJson} height="250px"/>
        <div style={{paddingBottom: '25px', textAlign: 'center'}}>
          <Typist avgTypingSpeed={40} startDelay={2000}
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|'}}>
            <span style={{color: 'white', fontSize: '-webkit-xxx-large'}}>WEB DEVELOPER IN THE MAKING </span>
          </Typist>
        </div>
      </div>
    );
  };
}

export default AboutSudeep;

