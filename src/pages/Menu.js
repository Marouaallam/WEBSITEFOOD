import React from 'react'
import {Menulist} from '../helpers/Menulist'
import MenuItems from '../components/menuItems'
import '../style/menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menutitle'>The menu</h1>
        <div className='menulist'>
           {Menulist.map((menuItem ,key)=>{
            return(
            <MenuItems
            key={key}
            image={menuItem.Image}
            name={menuItem.Name}
            price={menuItem.Price}
          />
        )
           })}
        </div>
    </div>
  )
}

export default Menu