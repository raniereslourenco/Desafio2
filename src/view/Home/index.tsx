import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart-white.png'

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([])
  const [ cart, setCart ] = useState<IProduct[]>([])
  

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, [])

  const handleCart = ( index: number ) => {
    let push: any = [...cart, cart.push(data[index]) ]
    setCart(push)
    const productStorage = JSON.stringify(cart)
    localStorage.setItem( `@cart`, productStorage )
    // console.log(cart)
  }

    
  return (
    <Container>
      <div className="nav">
        <div>
            <img src="https://ih0.redbubble.net/image.214959484.2959/sticker,375x360.u1.png" alt="vtex" width="200px" height="200px"  />
        </div>
        <div>
        <h1>Poseidon Wear</h1>
        </div>
        <div className="cart">
          <img src={Cart} alt="Carrinho" width="50px" height="auto" />
          <span>{cart.length} Itens</span>
        </div>
      </div>
      <section>
        {data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.image} alt={prod.title} width="150" height="200"/>
            <h5>{prod.title}</h5>
            {/* <span>{prod.description}</x'span> */}
            <h6>{prod.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' })}</h6>
            <button onClick={() => handleCart(index) }>Add Cart</button>
          </div>
        ) )}
      </section>
    </Container>
    );
}

export default Home;