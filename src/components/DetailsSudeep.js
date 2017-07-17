import React from 'react';
import image from '../sudeep-fb.jpg';
import PhoneIcon from 'react-icons/lib/fa/phone';
import EnvelopeIcon from 'react-icons/lib/fa/envelope';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';
import {StyleRoot} from 'radium';

const style = {
  mainContainer: {
    padding: '20px 100px 0px 100px',
    '@media screen and (max-width: 769px)': {
      padding: '0'
    }
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '15px',
    '@media screen and (max-width: 769px)': {
      flexDirection: 'column'
    }
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '@media screen and (max-width: 769px)': {
      justifyContent: 'space-around',
      padding: '15px'
    }
  },
  nameInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10px'
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media screen and (max-width: 769px)': {

      justifyContent: 'center'
    }
  },

};

class DetailsSudeep extends React.Component {
  render() {
    return (
      <StyleRoot>
        <div style={style.mainContainer}>
          <div style={style.infoContainer}>
            <div style={style.imageContainer}>
              <img src={image} alt='sudeep' height='100' width='100' style={{borderRadius: '50px'}}/>
              <div style={style.nameInfo}>
                <span style={{fontSize: 'x-large'}}>Sudeep Takkar</span>
                <span>Front End Developer</span>
              </div>
            </div>
            <div style={style.detailsContainer}>
              <ul style={{listStyle: 'none'}}>
                <li><a href="tel:+91 - 9873202317"><PhoneIcon/> +91 - 9873202317</a></li>
                <li><a href="mailto:sudeep.takkar93@gmail.com"><EnvelopeIcon/> sudeep.takkar93@gmail.com</a></li>
                <li><a href="https://github.com/Sudeep-takkar" target="_blank" rel="noopener noreferrer"><GithubIcon/>
                  Github</a></li>
                <li><a href="https://www.linkedin.com/in/sudeep-takkar-053866a2" target="_blank"
                       rel="noopener noreferrer"><LinkedinIcon/> Linkedin</a></li>
              </ul>
            </div>
          </div>
          <hr style={{border: '1px solid #eee'}}/>
        </div>
      </StyleRoot>
    );
  };
}

export default DetailsSudeep;

