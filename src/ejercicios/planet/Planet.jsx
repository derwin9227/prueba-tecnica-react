import {useEffect, useState} from 'react'
import Boton from '../../componentes/boton/Boton';
import {filterTerrain} from './filterTerrain';
import { filterPlanetByPeople } from './filterPlanetByPeople';
import './planet.css'

const inp = document.getElementById("input")
const Planet = () => {
  const [planets, setPlanets] = useState([]);
  const [terrains, setTerrains] = useState([]);
  const [inputTerrain, setInputTerrain] = useState('');

  const apiRequest = async () => {
    const request = await fetch("https://swapi.dev/api/planets");
    const resApi = await request.json();
    setTerrains(filterTerrain(resApi.results))
    setPlanets(filterPlanetByPeople(resApi.results, inputTerrain));
  }

  useEffect(()=>{
    apiRequest();
  },[])

  return (
    <section className='planet'>
      <h2>Search a planet by Terrain</h2>
      <div className="planet-list">
        <ol>
          {
            planets.sort((a,b)=>parseInt(a.population)-parseInt(b.population)).reverse().map(p => (
              <li key={p.created}>{p.name} &#8594; Population: {p.population}</li>
            ))
          }
        </ol>
      </div>
      <div className='buscar'>
        <select id="input"
          className='terrain-list'
          onChange={e=>setInputTerrain(e.target.value)}>
          <option>Terreno</option>
          {
            terrains.map((t,i) => (
              <option key={i} value={t}>{t}</option>
            ))
          }
        </select>
        <Boton buscar={apiRequest}>Buscar</Boton>
      </div>
    </section>
  )
}

export default Planet