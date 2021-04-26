import React from 'react'
import './Favorite.scss'

import { atomFamily, selectorFamily, useRecoilValue, useRecoilState } from 'recoil'

export const favoriteById = atomFamily({
  key: 'favorite',
  default: {
    name: '',
    booked: false,
  }
})

const getVacancy = (hotelId) => {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `query getHotelByKey($id: Int!) {hotelByKey(id:$id) {vacancy}}`,
    variables: { id: hotelId }
  }),
  }).then(res => res.json())
}

const hotelVacancy = selectorFamily({
  key: 'hotelVacancy',
  get: (hotelId) => async () => {
    const result = await getVacancy(hotelId)
    return result.data.hotelByKey.vacancy
  }
})

const Favorite = ({ id }) => {
  const [{ name, booked }, setFavorite] = useRecoilState(favoriteById(id))
  const vacancy = useRecoilValue(hotelVacancy(id))

  return (
    <li className="favorite">
      <div className="name">
        {name}
      </div>
      <div className="booked">
        <span
          className={`k-icon ${
            !vacancy 
              ? 'k-i-cancel'
              : vacancy && !booked
                ? 'k-i-check-outline'
                : 'k-i-check-circle'}
          `} 
          onClick={() => {
            if (vacancy) {
              setFavorite({ name: name, booked: !booked })
            }
          }}
        ></span>
      </div>
    </li>
  )
}

export default Favorite