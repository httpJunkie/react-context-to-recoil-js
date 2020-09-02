import React from 'react'

import { Column, Row } from "simple-flexbox"

import './Hotels.scss'

import HotelList from '../partial-components/HotelList'
import FavoriteList from '../partial-components/FavoriteList'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import withApolloProvider from '../hoc/withApolloProvider'

const hotelsGql = gql`{
  hotelsMalibu {
    id
    name
    city
    vacancy
    type
  }
}`

const Hotels = () => {
  document.title = `Hotel List`

  const { loading, error, data } = useQuery(hotelsGql)
  if (loading ) return <p>Loading...</p> 
  if (error ) return <p>Error... <span style={{color: 'red'}}>{error.message}</span></p> 

  const hotelList  = data.hotelsMalibu

  return (
    <>
      <Row horizontal="spaced">
        <Column flexGrow={1} style={{ minWidth: '280px', width: '60%' }}>
          <HotelList hotelList={hotelList} />
        </Column>
        <Column flexGrow={1} style={{ width: '40%' }}>
          <FavoriteList />
        </Column>
      </Row>
    </>
  )
}

const WrappedComponent = withApolloProvider(Hotels, 'http://localhost:4000/graphql')
export default WrappedComponent