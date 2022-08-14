import { GraphQLClient, gql } from 'graphql-request'
import InfoCard from "../../components/InfoCard"
import Layout from "../../components/Layout"

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
          id
          slug
          street_address
          city
          state
          zip_code
          rent
          bedrooms
          bathrooms
          sqft
          yearBuilt
          purchaseDate
          assessorParcelNumber
          mailboxNumber
          mailboxLocation
          garbagePickupDay
          fireInsuranceCarrier
          fireInsurancePolicyInformation
          fireInsurancePolicyExpirationDate
          maintenanceRequests {
            id
            title
            createdAt
            maintenanceStatus
            maintenanceSeverity
          }
          tenants {
            id
            firstName
            lastName
            phoneNumber
            email
            moveInDate
            initialRent
            currentRent
          }
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

    console.log(property)

    return (
          <Layout>
            <div className="slugMainContainer">
              <div className="slugContainerLeft">
                <h3>{property.street_address}</h3>
                <p>{property.city}, {property.state}</p>
                <div></div>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Bathrooms: {property.bathroooms}</p>
                <p>Sqft: {property.sqft}</p>
              </div>
              <div className="slugContainerRight">
                <div className="selectorContainer">
                  <p className="p">Property Details</p>
                  <p className="p">County Information</p>
                  <p className="p">Capital Expenditures</p>
                  <p className="p">Tenant</p>
                  <p className="p">Neighbors</p>
                  <p className="p">Comparables</p>
                  <p className="p">Comments</p>
                </div>
              </div>
            </div>
          </Layout>
    )
}

export default Property