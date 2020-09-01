import React from 'react'

import { useRecoilValue } from 'recoil'
import { themeTextRecoil } from '../context/AppAtoms'

const About = (props) => {
  document.title = 'About Page'
  const isLight = props.theme === 'light'

  const themeText = useRecoilValue(themeTextRecoil)

  return (
    <>
    <p>{isLight}</p>
      <h4 style={{ textAlign: isLight ? 'left' : 'right' }}>{themeText}</h4>
    </>
  )
}

export default About