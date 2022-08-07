import { GraphQLClient, gql } from 'graphql-request'
import InfoCard from "../../components/InfoCard"

export const getServerSideProps = async (pageContext) => {
    
    const url = process.env.GRAPH_CMS_ENDPOINT
    const client = new GraphQLClient(url, {
      headers: {
        "Authorization" : process.env.GRAPH_CMS_TOKEN
      }
    })

    const pageSlug = pageContext.query.slug

    const QUERY = gql`
    query($pageSlug: String!) {
        property(where: {slug: $pageSlug}) {
          street_address,
          city
        }
      }
    `

    const variables = {
        pageSlug,
    }

    const data = await client.request(QUERY, variables)
    const property = data.property

    return {
        props: {
            property
        }
    }
}

const Property = ({ property }) => {
    return (
        <div>
          {property.street_address}
          <InfoCard/>
        </div>
    )
}

export default Property