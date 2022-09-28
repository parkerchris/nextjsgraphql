
import { ApolloServer, gql } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
/* import {  typeDefs } from '../../graphql/schema';
import {  resolvers } from '../../graphql/resolvers'; */
import Cors from 'micro-cors';

const prisma = new PrismaClient();

const typeDefs = gql`
    type Property {
        id: String
        streetAddress: String
        city: String
        state: String
        zip: String
    }
    
    type Query {
        properties: [Property]
    }


`

const resolvers = {

    Query: {
        properties: (parent, args, context) => {
            return prisma.property.findMany()
        }
    }

}




const cors = Cors()

const server = new ApolloServer({
    typeDefs,
    resolvers
})

export const config = {
    api: {
        bodyParser: false,
    }
}

const startServer = server.start();


export default cors(async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
    }
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req,res);
});