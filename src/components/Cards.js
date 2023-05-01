import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Random words go here and make it EPIC!</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-9.jpg'
                text='random words until replaced'
                label='Random 1'
                path='/services'
                />
                    <CardItem 
                src='images/img-2.jpg'
                text='random words until replaced'
                label='Random 2'
                path='/services'
                />
                    <CardItem 
                src='images/img-3.jpg'
                text='random words until replaced'
                label='Random 3'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-9.jpg'
                text='random words until replaced'
                label='Random 1'
                path='/services'
                />
                    <CardItem 
                src='images/img-2.jpg'
                text='random words until replaced'
                label='Random 2'
                path='/services'
                />
                    <CardItem 
                src='images/img-3.jpg'
                text='random words until replaced'
                label='Random 3'
                path='/services'
                />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
