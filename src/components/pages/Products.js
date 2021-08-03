import React from 'react';
import '../../App.css';
import img from '../../assets/images/44.jpg'
import Chat from '../Chat';



export default function Products() {
  
  return (
    <>
    <div className="container productsBlock">
      <h1>Интернет маркетинг</h1>
      <p>В широком смысле интернет-маркетинг — это продвижение товаров и услуг онлайн. 
        Как правило, его конечная цель — продажа товара, услуги или повышение узнаваемости компании.</p>
        
        <div className="text-center">
        <img src={img} className="img-fluid" alt="..."/>
        </div>
        
    </div>
    <Chat />
   
    </>
  )
}
