const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const couchbase = require('couchbase')

// create app, connect to server
const app = express()
app.use(cors())
const credentials = { username: 'Administrator', password: 'password' }
const cluster = new couchbase.Cluster('couchbase://localhost', credentials)
const bucket = cluster.bucket('travel-sample')
const collection = bucket.defaultCollection();

const schema = buildSchema(`
  type Query {
    hotelsMalibu: [Hotel],
    hotelByKey(id: Int!): Hotel
  }
  type Hotel {
    id: Int,
    name: String,
    city: String,
    vacancy: Boolean,
    type: String
  }
`)

// Define Resolvers
const hotelsMalibuQuery = `
  SELECT hotel.* 
  FROM \`travel-sample\` AS hotel 
  WHERE hotel.type = 'hotel'
  AND hotel.city = 'Malibu'
  ORDER BY hotel.name ASC
`

const root = {
  hotelsMalibu: async () => {
    const result = await cluster.query(hotelsMalibuQuery)
    return result.rows
  },
  hotelByKey: async ({id}) => {
    const result = await collection.get(`airline_${id}`)
    return result.value
  }
}

// the graphqlHTTP function accepts a schema, rootValue and graphiql 
// among other options for configuring our GraphQL Server
const serverPort = 4000
const serverUrl = '/graphql'
app.use(serverUrl, graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(
  serverPort,
  () => console.log(`GraphQL server running: http://localhost:${serverPort}${serverUrl}`)
)