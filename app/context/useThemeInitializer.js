import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useMediaPredicate } from 'react-media-hook'

import { themeRecoil } from './AppAtoms'

export const useThemeInitializer = () => {
  const [ theme, setTheme] = useRecoilState(themeRecoil)
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') 
   ? 'dark'
   : 'light'

  useEffect(() => {
    setTheme(preferredTheme || localStorage.getItem('recoilApp_theme'))
  }, [preferredTheme, setTheme])

  useEffect(() => {
    localStorage.setItem('recoilApp_theme', theme)
  }, [theme])

  return { theme }
}