import {useState, useEffect} from 'react'
import filterUsers from './filterUsers'
import { Boton } from '../../componentes';
import './find.css'

const apiUrl = "https://randomuser.me/api/?results=20&nat=es";

const Find = () => {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState('');

const apiRequest = async () => {
    const request = await fetch(apiUrl);
    const dataApi = await request.json();
    setAge(document.getElementById('inputAge').value);
    const userList = filterUsers(age, dataApi.results)
    setUsers(userList);
  };

  useEffect(()=>{
    apiRequest();
  },[age]);

  return (
    <section className='find'>
      <h2>Fetch and Find user by Age</h2>
      <div className='buscar'>
        <input type="number" 
          className='input' 
          id='inputAge'
          placeholder='type an age'
        />
        <Boton buscar={() => 
        setAge(document.getElementById('inputAge').value)
          } >Buscar</Boton>
      </div>
      <div className='result' style={{marginTop:'7px'}}>
          {
          users.length>0 && (<>{users[0].name.first} {users[0].name.last} tiene &#8594; {users[0].dob.age} años</>)
          }
          {
            users.length<=0 && (<span style={{color:'#700'}}>No hay resultados</span>)
          }
      </div>
    </section>
  )
}

export default Find