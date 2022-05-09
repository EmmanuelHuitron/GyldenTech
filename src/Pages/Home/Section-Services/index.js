import * as React from 'react';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
      animation: 'x 3s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    slideInRight: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }
const Services = () => {
    
    return (
        <></>
    )
}

export default Services;