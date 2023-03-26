import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import InterestsIcon from '@mui/icons-material/Interests';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    // const modules = ["Module 1", "Module 2", "Module 3"]
    return (
      <>
      <div className='header1'>

        <span><FavoriteIcon />a arte de coidarte</span>
      </div><nav className="navBar">
          <input id="menuToggle" type="checkbox" />
          <label className='menuButtonContainer' for="menuToggle">
            <div className='menuButton'></div>
          </label>

          <p>LOGO HERE</p>

          <ul className="menu">
            <li><a href="/about">NÓS</a></li>
            <li><a href="#"><InterestsIcon /></a></li>
            <li><a href="#"><SearchIcon /></a></li>
            <li><a href="#"><PersonIcon /></a></li>

          </ul>
        </nav>
        </>
    
  )
}

export default Header
