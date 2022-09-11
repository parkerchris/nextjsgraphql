import styles from '../styles/PropertyCard.module.css'
import Image from 'next/image'
import coggins from '../public/coggins.jpg'


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
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
            <Image
                      alt={`Image of a house`}
                      src={coggins}
                      layout={`responsive`}
                    />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.firstDetailRow}>
                    <h3 className={styles.address}>1405 Ridge Dr</h3>
                    <p>$2,200/M</p>
                </div>
                <div className={styles.secondDetailRow}>
                    <p>Redding, CA.</p>
                    <div className={styles.statusContainer}>
                        <div className={styles.statusIcon}></div>
                        <p className={styles.status}>Occupied</p>
                    </div>
                </div>
            </div>
        </div>
    )
}