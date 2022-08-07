import styles from '../styles/PropertyCard.module.css'


/* 
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const ImageContainer = styled.div`
    border: 1px solid black;
    width: 350px;
    height: 250px;
    border-radius: 6px;
`

export const H3 = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
`

export const P = styled.p`
    color: darkgray;
    font-size: 0.9rem;
` */

export default function PropertyCard({property}) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}></div>
            <div className={styles.totalBottomContainer}>
                <div className={styles.bottomContainer}>
                    <h3 className={styles.addressText}>{property.street_address}</h3>
                    <h4>${property.rent}</h4>
                </div>
                <p className={styles.cityText}>{property.city}, {property.state}.</p>
            </div>
        </div>
    )
}