import React from 'react';
import Particles from 'react-particles-js';
import particleJson from '../particle.js';
import Typist from 'react-typist';
import imageBackground from '../luca-bravo-217276.jpg';
import {StyleRoot} from 'radium';

const styles = {
  stylesText: {
    color: 'white',
    fontSize: '-webkit-xxx-large',
    textShadow: '2px 2px #00bcd4',
  }
};

class AboutSudeep extends React.Component {
  render() {
    return (
      <StyleRoot>
        <div style={{
          height: '100%',
          background: `url(${imageBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <Particles params={particleJson} height="175px"/>
          <div style={{textAlign: 'center'}}>
            <Typist avgTypingSpeed={40} startDelay={2000}
                    cursor={{
                      show: true,
                      blink: true,
                      element: '|'
                    }}>
              <span style={styles.stylesText}>big ideas have small beginnings...</span>
            </Typist>
          </div>
        </div>
      </StyleRoot>
    );
  };
}

export default AboutSudeep;

