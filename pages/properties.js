import Head from 'next/head'
import Image from 'next/image'
import { GraphQLClient, gql } from 'graphql-request'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PropertyCard from '../components/PropertyCard'
import styles from '../styles/Properties.module.css'




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
        <div>
            <Header></Header>
            <Nav/>
            <div className={styles.testtest}><PropertyCard/></div>
            <Footer></Footer> 
        </div>  
    )
  }