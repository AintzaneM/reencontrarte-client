import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)
    // const modules = ["Module 1", "Module 2", "Module 3"]
    return (
      <div className="dropdownContainer">
        <a className="dropdowBtn" onClick={event => setIsActive(!isActive)}> 
        <span>Módulo X</span>
        <ExpandMoreIcon/>
        </a>
        {isActive && (
            <div className="dropdownContent">
                <a className="dropdownItem">Action</a >
                <a className="dropdownItem">Another action</a>
                <a className="dropdownItem">Something else</a>
            </div>
        )}

        
   </div>
  )
}

export default Dropdown
