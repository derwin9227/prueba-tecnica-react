import { Count, FastestShip, Find, Order, Planet } from './ejercicios';
import './App.css'

function App() {
  return (
      <section className='container'>
        <div className='container-api'>
          <Count />
          <span className='sectionSpace'/>
          <Find />
          <span className='sectionSpace'/>
          <Order/>
        </div>
        
        <div className='container-api'>
          <FastestShip />
          <span className='sectionSpace'/>
          <Planet />
        </div>
      </section>
  )
}

export default App
