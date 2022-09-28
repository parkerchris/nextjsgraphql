import { gql } from 'apollo-server-micro'


export const typeDefs = gql`

    type property {
        id: String
        streetAddress: String
    }


    type Query {
        properties: [property]
    }
`