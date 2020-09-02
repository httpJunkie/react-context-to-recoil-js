import React from 'react'
import './HotelList.scss'

import { useRecoilValue, useRecoilCallback } from 'recoil'
import { favoriteListIds } from './FavoriteList'
import { favoriteById } from './Favorite'

const HotelList = ({ hotelList }) => {

  const favoriteIds = useRecoilValue(favoriteListIds)

  const addIdToListAndCreateFavorite = ({ set }) => {
    return (name, vacancy, id) => {
      set(favoriteListIds, [...favoriteIds, id])
      set(favoriteById(id), { name, vacancy, booked: false })
    }
  }
  /*
    { set } - Sets the value of an atom or selector. 
    You may either provide the new value directly 
    You can provide and updater function returning the new value 
    It takes the current value as a parameter. 
  */

  /* 
    useRecoilCallback(fn, deps) is similar to useCallback(fn, deps) 
    it provides an API to work with/update recoil state (async capable)
    { set, snapshot, gotoSnapshot, reset}
    we pass addIdToListAndCreateFavorite addFavAnndLikToFavoriteListIds callback function in and return a function 
    signature of our insertFavorite is the same as our returned function addIdToListAndCreateFavorite addFavAnndLikToFavoriteListIds
  */

  const insertFavorite = useRecoilCallback(addIdToListAndCreateFavorite)
  // you can also use an optional set of dependencies for memoizing the callback.

  const listItems = hotelList.map(({ name, city, vacancy, id }) => (
    <li className="hotel" key={`${name}-${id}`}>
      <div className="name">{name}</div>
      <div className="city">{city}</div>
      <div className="vacancy">{vacancy ? "Yes" : "No"}</div>
      <div className="icon">
        <span
          className={`k-icon ${
            favoriteIds.includes(id)
              ? 'k-i-star'
              : 'k-i-star-outline'}
          `}

          onClick={() => {
            if (!favoriteIds.includes(id)) {
              insertFavorite(name, vacancy, id)
            }
          }}
        ></span>
      </div>
    </li>
  ))

  return (
    <div className={'hotel-list'}>
      <ul>
        <li className="hotel" key="header">
          <div className="name">Hotel Name</div>
          <div className="city">City</div>
          <div className="vacancy">Vacancy</div>
          <div className="icon">Add Favorite</div>
        </li>
        {listItems}
      </ul>
    </div>
  )
}

export default HotelList