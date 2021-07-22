import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.jpg'

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
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
    console.log(cart)
  }
  return (
    <Container>
      <div className="nav">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1280px-VTEX_Logo.svg.png" alt="vtex" width="350px" height="200px"  />
        </div>
        <div className="cart">
          <img src={Cart} alt="Carrinho" width="50px" height="auto" />
          <span>( {cart.length} ) Itens</span>
        </div>
      </div>
      <section>
        {data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt={prod.name} width="200" height="auto"/>
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={() => handleCart(index) }>Add Cart</button>
          </div>
        ) )}
      </section>
    </Container>
    );
}

export default Home;