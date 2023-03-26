import React from 'react';
import Dropdown from '../Dropdown';
import Footer from '../Footer';
import Header from '../Header';

 
const Resources = () => {
  return (
    <>
      <Header></Header>

      <div className='cardsResourcesWrap'>
        <div className="cardsResourcesContainer container">

          <div className="titleResources">
            <h1>APRENDE<br></br> <strong>CON NÓS</strong></h1>
          </div>
          <div className='resources row'>

            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>
            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>
            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>
            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>
            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>
            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>
            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>
            <div className='resourcesDropdown'>
              <Dropdown></Dropdown>
            </div>

            <p>
            DIXITAL Creacións audiovisuais propias jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            GUIAS Acordos de bo trato para a resolución de conflitos na aula, na familia, nas relacións, no traballo.  Caderno de Autocoñecemento para situacións de crise
            RECURSOS Recursos dixitais disponibles para calquera persoa interesada
            XOGOS Unha habitación propia (Mulleres na historia. Investigación) Fakenews (Concurso) Loita polos Dereitos Civís Escrita creativa
            </p>

          </div>
        </div>


      </div>
      <Footer></Footer>
    </>
  )
}
 
export default Resources;