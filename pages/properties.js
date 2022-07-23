import Head from 'next/head'
import Image from 'next/image'
import { GraphQLClient, gql } from 'graphql-request'
import PropertyCard from '../components/PropertyCard'
import Layout from '../components/Layout'
import styles from '../styles/Properties.module.css'
import lemon from '../public/Revised_Lemon.png'




export async function getStaticProps() {
    const url = process.env.GRAPH_CMS_ENDPOINT
    const Client = new GraphQLClient(url, {
    headers: {
      "Authorization" : process.env.GRAPH_CMS_TOKEN
    }
  })
  const QUERY = gql`
  {
    properties {
      street_address,
      city,
      state,
      zip_code
    }
  }
  `
const data = await Client.request(QUERY)
const properties = data.properties

return{
  props: {
    properties
  }
}

}



export default function Properties({properties}) {
    return (
          <Layout>
              <div className={styles.container}>
                <div className={styles.propertyContainer}>
                  <div className={styles.propertyContainerTop}>
                    <button className={styles.buttonOne}>Add a property</button>
                    <button className={styles.buttonTwo}>Filter</button>
                  </div>
                  <div className={styles.propertyContainerMiddle}>
                    
                  </div>
                  <div className={styles.propertyContainerBottom}>
                    <Image
                      alt={`Guy sitting on bench in front of homes`}
                      src={lemon}
                      layout={`responsive`}
                    />
                  </div>
                  
                </div>
                <div className={styles.mapContainer}><span className={styles.dummy}>THIS IS A MAP</span></div>
              </div>
          </Layout>

    )
  }