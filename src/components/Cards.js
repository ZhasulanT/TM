import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import logo from '../assets/images/images.jpg';
import shulteImg from '../assets/images/Новый точечный рисунок.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Мы можем Вам предложить</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={logo}
              text='Реклама в социальных сетях'
              label='31.07.2021'
              path='/products'
            />
           
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Cards;
