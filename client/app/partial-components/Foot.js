import React from 'react'
import { Column, Row } from 'simple-flexbox'
import { Switch } from '@progress/kendo-react-inputs'

import { useRecoilState } from 'recoil'
import { themeRecoil } from '../context/AppAtoms'

const Foot = () => {
  const [theme, changeTheme] = useRecoilState(themeRecoil)
  const isLight = theme === 'light'
  const dateString = new Date().getFullYear()

  const handleThemeSwitch = () => changeTheme(isLight ? 'dark' : 'light')

  return (
    <Row>
      <Column flexGrow={1} >
        <span className='foot-info'>
          httpJunkie {dateString} | &nbsp; <Switch onChange={handleThemeSwitch} checked={isLight} onLabel={'light theme'} offLabel={'dark theme'} />
        </span>
      </Column>
    </Row>
  )
}

export default Foot