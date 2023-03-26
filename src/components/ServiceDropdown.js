import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExtensionIcon from '@mui/icons-material/Extension';
import SmartToyIcon from '@mui/icons-material/SmartToy';
const ServiceDropdown = () => {
    const [isActive, setIsActive] = useState(false)
    // const modules = ["Module 1", "Module 2", "Module 3"]
    return (
      <div className="cardsServiceWrap">
         <div className="cardsServicesContainer container" >
            <div className="titleServices">
              <h1>APRENDE<br></br> <strong>CON NÓS</strong></h1>
              <a className="dropdowBtnServices" onClick={event => setIsActive(!isActive)}> 
      
        <ExpandMoreIcon/>
        </a>
            </div>

        
        {isActive && (
          
          <div className="cards row" >
            <article className="cardServices db pr">
            <a href="/resources" className="linkIconServices oh db pr linkGeneral iconHover pop-on-hover ">
              
              <div className="iconService db ">
                <i></i>
                <VideoLibraryIcon className="cardIcon" />
              </div>
            </a>
            <div className="infoServices db">
              <h4>DIXITAL</h4>
              <div className="serviceSummary"></div>
            </div>
            </article>

            <article className="cardServices db pr">
              <a href="/resources" className="linkIconServices oh db pr linkGeneral iconHover pop-on-hover ">
                
                <div className="iconService db">
                  <i></i>
                  <MenuBookIcon className="cardIcon" />
                </div>
              </a>
              <div className="infoServices db">
                <h4>RECURSOS E GUIAS</h4>
                <div className="serviceSummary"> </div>
              </div>
            </article>

            <article className="cardServices db pr">
              <a href="/resources" className="linkIconServices oh db pr linkGeneral iconHover pop-on-hover ">
                <div className="iconService db">
                  <i ></i>
                  <SmartToyIcon className="cardIcon"/>
                </div>
              </a>
              <div className="infoServices db">
                <h4>XOGOS</h4>
                <div className="serviceSummary"> </div>
              </div>
            </article>
          </div>
        )}

        </div>
   </div>
  )
}

export default ServiceDropdown
