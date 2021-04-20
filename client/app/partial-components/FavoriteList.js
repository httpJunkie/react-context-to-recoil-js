import React, { Suspense } from 'react'
import { atom, useRecoilValue } from 'recoil'
import './FavoriteList.scss'

const LoadingMessage = () => `loading...`

import Favorite from './Favorite'

export const favoriteListIds = atom({
  key: 'favorites',
  default: [] // [37595, 17309, 37590]
})

const FavoriteList = () => {
  const favoriteIds = useRecoilValue(favoriteListIds)
  const listItems = favoriteIds.map(id => <Favorite id={id} key={`favorite_${id}`} />)

  return (
    <div className={'favorite-list'}>
      <ul>
        <li className="favorite">
          <div className="name">Favorites List</div>
          <div className="booked">Is Booked?</div>
        </li>
        <Suspense fallback={<LoadingMessage />} >
          {listItems}
        </Suspense>
      </ul>
    </div>
  )
}

export default FavoriteList