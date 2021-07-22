import React, { useState, useEffect } from 'react';

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
  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, [])

  const handleCart = ( index: number ) => {
    const productStorage = JSON.stringify(data[index])    
    localStorage.setItem( `@Produto-${index}`, productStorage )    
    // data[index]
  }

  return (
    <Container>
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