import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1> Random Words go here </h1>
      <p> Quote to inspire people goes here</p>
      <div className='hero-btns'>
        <Button className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            Rando Button
        </Button>
        <Button className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            Rando Trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
