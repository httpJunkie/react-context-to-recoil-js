import React from 'react'
import { NavLink } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { navOpenRecoil } from '../context/AppAtoms'

const Menu = () => {
  const [navOpen, toggleSidenav] = useRecoilState(navOpenRecoil)

  return (
    <ul>
      <li className='link'>
        <NavLink tabIndex='2' exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li className='link'>
        <NavLink tabIndex='3' activeClassName='active' to='/hotels'>Hotels</NavLink>
      </li>
      <li className='menu'>
        <span className='k-icon k-i-menu'
          onKeyPress={event => {
            if (event.key === 'Enter') {
              toggleSidenav(!navOpen)
            }
          }}
          onClick={() => toggleSidenav(!navOpen)}
        ></span>
      </li>
    </ul>
  )
}

export default Menu