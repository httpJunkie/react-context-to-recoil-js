import React from 'react'
import './Favorite.scss'

import { atomFamily, useRecoilState } from 'recoil'

export const favoriteById = atomFamily({
  key: 'favorite',
  default: {
    name: '',
    vacancy: '',
    booked: false,
  }
})

const Favorite = ({ id }) => {
  const [{ name, vacancy, booked }, setFavorite] = useRecoilState(favoriteById(id))

  return (
    <li className="favorite">
      <div className="name">
        <a href="#" onClick={()=>{
          console.log("Refresh Vacancy")
        }}>
          {name}
        </a>
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
              setFavorite({ name: name, booked: !booked, vacancy: vacancy })
            }
          }}
        ></span>
      </div>
    </li>
  )
}

export default Favorite