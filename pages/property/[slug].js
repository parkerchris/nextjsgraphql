import { GraphQLClient, gql } from 'graphql-request'
import InfoCard from "../../components/InfoCard"
import Layout from "../../components/Layout"
import Image from 'next/image'
import kentfield from '../../public/kentfield.jpg'
import LayoutTwo from "../../components/LayoutTwo"

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
            <LayoutTwo>
              <div className="slugMainContainer">
              <div className="slugContainerLeft">
                <div className="innerContainerLeft">
                  <div className="property">
                    <h1>1105 Kentfield Rd.</h1>
                    <p>Chico, CA.</p>
                  </div>

                  <div className="flex">
                    <div className="flexInner">
                      <h4>Pod</h4>
                      <p>Parker Properties</p>
                    </div>
                    <div>
                      <h4>Ownership Percent</h4>
                      <p>100%</p>
                    </div>
                  </div>

                 
{/* 
                  <div className="graphAndCardContainer">
                    <div className="graphContainer"></div>
                    <div className="cardContainer">
                      <div className="card"></div>
                      <div className="card"></div>
                      <div className="card"></div>
                      <div className="card"></div>
                      <div className="card"></div>
                    </div>
                  </div> */}

                  <h3 className="header">Property Details</h3>
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
                  <div className="flex">
                    <div className="flexInner">
                      <h4>Year Built</h4>
                      <p>1948</p>
                    </div>
                    <div className="flexInner">
                      <h4>Date of Purchase</h4>
                      <p>10-12-2012</p>
                    </div>
                    <div className="flexInner">
                      <h4>Purchase Price</h4>
                      <p>$400,000</p>
                    </div>
                  </div>
                  <h3 className="header">County Information</h3>
                  <div>
                    <h4>Assessor Parcel Number</h4>
                    <p>987345-345-11</p>
                  </div>
                  <h3 className="header">Expenses</h3>
                  <h3 className="header">Maintenance</h3>
                  <h3 className="header">Capital Expendetures</h3>
                  <h3 className="header">Rent Details</h3>
                  <div className="flex">
                    <div className="flexInner">
                      <h4>Starting Rent</h4>
                      <p>$1200</p>
                    </div>
                    <div className="flexInner">
                      <h4>Current Rent</h4>
                      <p>$2100</p>
                    </div>
                  </div>
                  <h3 className="header">Misc.</h3>
                  <div className="flex">
                    <div className="flexInner">
                      <h4>Mailbox Number</h4>
                      <p>2</p>
                    </div>
                    <div className="flexInner">
                      <h4>Mailbox Location</h4>
                      <p>on the street.</p>
                    </div>
                  </div>
                  <div>
                    <h4>Garbage Day</h4>
                    <p>Wednesday</p>
                  </div>
                  <h3 className="header">Insurance</h3>
                  <div className="flex">
                    <div className="flexInner">
                      <h4>Fire Insurance Company</h4>
                      <p>Got you covered, llc</p>
                    </div>
                    <div className="flexInner">
                      <h4>Fire Insurance Policy Number</h4>
                      <p>23455</p>
                    </div>
                    <div className="flexInner">
                      <h4>Fire Insurance Expiration Date</h4>
                      <p>12-10-2024</p>
                    </div>
                  </div>
                  <h3 className="header">Tenants</h3>
                  <div className="flex">
                    <div className="flexInner">
                      <h4>Name</h4>
                      <p>Chris Appleseed</p>
                    </div>
                    <div className="flexInner">
                      <h4>Phone Number</h4>
                      <p>543-324-8973</p>
                    </div>
                    <div className="flexInner">
                      <h4>Email</h4>
                      <p>anemail@email.com</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flexInner">
                      <h4>Move in Date</h4>
                      <p>1-19-2010</p>
                    </div>
                    <div className="flexInner">
                      <h4>Move out date</h4>
                      <p>1-21-2010</p>
                    </div>
                  </div>
                  <h3 className="header">Neighbors</h3>
                  <h3 className="header">Comparables</h3>
                </div>
              </div>
              <div className="slugContainerRight">
                <div className="innerContainerRight"></div>
              </div>
            </div>
            </LayoutTwo>
    )
}

export default Property