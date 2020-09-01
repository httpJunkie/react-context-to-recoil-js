import { atom, selector } from 'recoil'

// Global State Atoms
export const navOpenRecoil = atom({
  key: 'navOpenRecoil',
  default: false
})
export const themeRecoil = atom({
  key: 'themeRecoil',
  default: ''
})

// Global State Selectors
export const themeTextRecoil = selector({
  key: 'themeTextRecoil',
  get: ({get}) => `The theme is ${get(themeRecoil)}`
})