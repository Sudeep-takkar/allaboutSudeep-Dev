import React from 'react';
import Particles from 'react-particles-js';
import particleJson from '../particle.js';
import Typist from 'react-typist';
import imageBackground from '../luca-bravo-217276.jpg';

const styles={
  stylesText: {
    color: 'white',
    fontSize: '-webkit-xxx-large',
    textShadow: '2px 2px #00bcd4'
  }
};

class AboutSudeep extends React.Component {
  render() {
    return (
      <div style={{
        height: '100%',
        background: `url(${imageBackground}) center / cover no-repeat transparent`,
        backgroundSize: 'cover'
      }}>
        <Particles params={particleJson} height="150px"/>
        <div style={{paddingBottom: '25px', textAlign: 'center'}}>
          <Typist avgTypingSpeed={40} startDelay={2000}
                  cursor={{
                    show: true,
                    blink: true,
                    element: '|'}}>
            <span style={styles.stylesText}>big ideas have small beginnings...</span>
          </Typist>
        </div>
      </div>
    );
  };
}

export default AboutSudeep;

