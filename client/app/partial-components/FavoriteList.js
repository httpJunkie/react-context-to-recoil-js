import React from 'react'
import { atom, useRecoilValue } from 'recoil'
import './FavoriteList.scss'

import Favorite from './Favorite'

export const favoriteListIds = atom({
  key: 'favorites',
  default: [] // [37595, 17309, 37590]
})

const FavoriteList = () => {
  const favoriteIds = useRecoilValue(favoriteListIds)
  const listItems = favoriteIds.map(id => <Favorite id={id}/>)

  return (
    <div className={'favorite-list'}>
      <ul>
        <li className="favorite">
          <div className="name">Favorites List</div>
          <div className="booked">Is Booked?</div>
        </li>
        {listItems}
      </ul>
    </div>
  )
}

export default FavoriteList