import React, { useState } from 'react'
import './header.css'
import {BiMenuAltRight} from 'react-icons/bi'

const Header =()=> {
   const [menuOpened, setMenuOpened] = useState(false)
   
    const getMenuStyles =(menuOpened)=> {
      if(document.documentElement.clientWidth <= 800)
        {
          return {right: !menuOpened && "-100%"}
        }
    }

  return (
   <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
          <img src="./logo.png" alt="logo" width={100}/>
          
              <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href=""> Residencies </a>
            <a href="">Our Value</a>
            <a href="">Counter Us</a>
            <a href="">Get Started</a>
                <button className="button">
                   <a href="">Contact</a>
                </button>
              </div>
          <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
             <BiMenuAltRight size={30}/>
          </div>
      </div>
   </section>
  )
}

export default Header