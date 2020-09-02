import { atom, selector } from 'recoil'

export const navOpenRecoil = atom({
  key: 'navOpenRecoil',
  default: false
})
export const themeRecoil = atom({
  key: 'themeRecoil',
  default: ''
})

export const themeTextRecoil = selector({
  key: 'themeTextRecoil',
  get: ({get}) => `The theme is ${get(themeRecoil)}`
})