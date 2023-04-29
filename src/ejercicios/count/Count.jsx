import { useEffect, useState } from 'react'
import countChars from './countChars';
import { Boton } from '../../componentes';
import './count.css'

const apiUrl = "https://randomuser.me/api/?results=5&nat=es";

const Count = () => {
  const [users, setUsers] = useState([]);
  const [chars, setChars] = useState({});

  const apiRequest = async () => {
    const request = await fetch(apiUrl);
    const dataApi = await request.json();
    setUsers(dataApi.results);
    setChars(countChars(dataApi.results))
  };

  useEffect(()=>{
    apiRequest();
  },[]);

  return (
    <section className='count' id="count">
      <h2>Fetch and Count 5 users most repeat char in names</h2>
        <ol className='count-list'>
        {
          users.map(e=>(
            <li key={e.login.uuid}>
              {e.name.first} {e.name.last}
            </li>
          ))
        }
        </ol>
        <h3>most repeated char is</h3>
        {chars && (<p>{chars.letra} &#8594; {chars.repeticiones}</p>)}
      <Boton buscar={apiRequest}>Actualizar</Boton>
    </section>
  )
}

export default Count