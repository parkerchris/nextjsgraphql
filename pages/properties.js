import Head from 'next/head'
import Image from 'next/image'
import { GraphQLClient, gql } from 'graphql-request'
import PropertyCard from '../components/PropertyCard'
import Layout from '../components/Layout'
import styles from '../styles/Properties.module.css'
import lemon from '../public/Revised_Lemon.png'
import AddProperty from '../components/AddProperty'
import { useState } from 'react'
import Link from 'next/link'
import ContentHeader from '../components/ContentHeader'
import LayoutTwo from '../components/LayoutTwo'
import {useJsApiLoader , GoogleMap} from '@react-google-maps/api'
import Map from '../components/Map'




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
      id
      slug
      street_address
      city
      state
      zip_code
      rent
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

    

    const [ showAddPropertyModal, setShowAddPropertyModal ] = useState(false);

    const handleClick = () => {
      setShowAddPropertyModal(!showAddPropertyModal)
    }

    return (
          <LayoutTwo>
              <div className={styles.container}>
                <div className={styles.mapContainer}>
                  <Map/>
                  </div>
                <div className={styles.propertyContainer}>
                  <div className={styles.propertyContainerTop}>
                    {/* <button 
                      className={styles.buttonOne}
                      onClick={handleClick}
                      >Add a property</button>
                    <button className={styles.buttonTwo}>Filter</button> */}
                    <ContentHeader
                      handleClick={handleClick}
                    />
                  </div>
                  {showAddPropertyModal && <AddProperty/>}
                  <div className={styles.propertyContainerMiddle}>
                    <div className={styles.propertyContainerMiddleInner}>
                      {properties.map(property => {
                        return (
                          <div key={property.id}>
                            <Link href={`/property/${property.slug}`}>
                              <a><PropertyCard 
                                property={property}
                              /></a>
                            </Link>
                        </div>
                      )
                    })}
                    </div>
                  </div>
                  <div className={styles.propertyContainerBottom}>
                    <Image
                      alt={`Guy sitting on bench in front of homes`}
                      src={lemon}
                      layout={`responsive`}
                    />
                  </div>
                  
                </div>
                
              </div>
          </LayoutTwo>

    )
  }