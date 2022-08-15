import { GraphQLClient, gql } from 'graphql-request'
import InfoCard from "../../components/InfoCard"
import Layout from "../../components/Layout"
import Image from 'next/image'
import kentfield from '../../public/kentfield.jpg'

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
            <div className="slugMainContainer">
              <div className="slugContainerLeft">
                <div className="innerContainerLeft">
                  <div className="property">
                    <h1>1105 Kentfield Rd.</h1>
                    <p>Chico, CA.</p>
                  </div>

                  <div className="mainDetails">
                    <div className="mainDetailSingleContainer">
                      <p className="detailHeader">Purchase Price</p>
                      <p className="detailMetric">$250,000</p>
                    </div>
                    <div className="mainDetailSingleContainer">
                      <p className="detailHeader">Beds</p>
                      <p className="detailMetric">3</p>
                    </div>
                    <div className="mainDetailSingleContainer">
                      <p className="detailHeader">Bath</p>
                      <p className="detailMetric">2</p>
                    </div>
                    <div className="mainDetailSingleContainer">
                      <p className="detailHeader">Sqft</p>
                      <p className="detailMetric">1200</p>
                    </div>
                  </div>

                  <div className="graphAndCardContainer">
                    <div className="graphContainer"></div>
                    <div className="cardContainer">
                      <div className="card"></div>
                      <div className="card"></div>
                      <div className="card"></div>
                      <div className="card"></div>
                      <div className="card"></div>
                    </div>
                  </div>

                  <h3>Property Details</h3>
                  <div>
                    <h4>Year Built</h4>
                    <p>1948</p>
                  </div>
                  <div>
                    <h4>Date of Purchase</h4>
                    <p>10-12-2012</p>
                  </div>
                  <h3>County Information</h3>
                  <h3>Insurance</h3>
                  <h3>Expenses</h3>
                  <h3>Maintenance</h3>
                  <h3>Capital Expendetures</h3>
                  <h3>Rent Details</h3>
                  <h3>Tenants</h3>
                  <h3>Neighbors</h3>
                  <h3>Comparables</h3>
                </div>
              </div>
              <div className="slugContainerRight">
                <div className="innerContainerRight"></div>
              </div>
            </div>
    )
}

export default Property