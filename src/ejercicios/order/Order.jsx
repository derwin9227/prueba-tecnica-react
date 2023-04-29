import React, { useEffect, useState } from 'react';
import sortUsers from './orderArray';
import { Boton } from '../../componentes';
import './order.css';

const apiUrl = "https://randomuser.me/api/?results=10&nat=es";

const Order = () => {
  const [users, setUsers] = useState([]);

  const apiRequest = async () => {
    const request = await fetch(apiUrl);
    const dataApi = await request.json();
    setUsers(sortUsers(dataApi.results));
  };

  useEffect(()=>{
    apiRequest();
  },[]);

  return (
    <section className='order' id='order'>
      <h2>Fetch and Order 10 users</h2>
      <ol className='userList'>
        {
          users.map(e => (
            <li key={e.login.uuid}>
              {e.name.first} {e.name.last}
            </li>
          ))
        }
      </ol>
      <Boton buscar={apiRequest}>Actualizar</Boton>
    </section>
  )
}

export default Order