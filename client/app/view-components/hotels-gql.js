import { gql } from '@apollo/client';

export const hotelsGql = gql`
  {
    hotelsMalibu {
      id
      name
      city
      vacancy
    }
  }
`

// const { loading, error, data } = useQuery(hotelByKeyGql, { variables: { id } })
// if (loading) return <p>Loading...</p> 
// if (error) return <p>Error... <span style={{color: 'red'}}>{error.message}</span></p> 

// const hotel  = data.hotelByKey