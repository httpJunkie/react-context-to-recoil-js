import React from 'react'
import './Sidenav.scss'

import { useRecoilValue } from 'recoil'
import { navOpenRecoil } from '../context/AppAtoms'

import Menu from './Menu'

const Sidenav = () => {
  const navOpen = useRecoilValue(navOpenRecoil)

  return (
    <div className={`sidenav ${navOpen ? 'show' : 'hide'}`}>
      <Menu />
    </div>
  )
}

export default Sidenav