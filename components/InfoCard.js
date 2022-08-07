import { useState } from 'react'
import styles from '../styles/InfoCard.module.css'
import { RiEdit2Fill } from "react-icons/ri";



export default function InfoCard() {


    const [ editMode, setEditMode] = useState(false)
    const [ details, setDetails ] = useState({
        streetNumber: "1405 Ridge Dr.",
        city: "Redding",
        state: "CA",
        zip: 96001,
        rent: 1750,
        occupied: "no"
    })

    function handleClick() {
        setEditMode(!editMode)
    }

    function handleChange(event) {
        setDetails(prevDetails => {
            return {
                ...prevDetails,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {

    }

    console.log(details)

    return (
        <div className={styles.totalContainer}>
            <div>
            <div className={styles.headerContainer}>
                <h3 className={styles.h3}>Property Details</h3>
                <RiEdit2Fill className={styles.editIcon} onClick={handleClick}/>
            </div>
            <div className={styles.mainContainer}>
                <form className={styles.form}>
                    <div className={styles.propertyContainer}>
                        {/* <div className={styles.labelInput}>
                            <label className={styles.label}>Number</label>
                            { editMode ? <input
                                className={styles.input}
                                placeholder="1405"
                            ></input> : <h3 className={styles.data}>1405</h3>}
                        </div> */}
                        <div className={styles.labelInput}>
                            <label className={styles.label}>Street</label>
                            { editMode ? <input
                                name="streetNumber"
                                className={styles.input} 
                                placeholder={details.streetNumber}
                                onChange={handleChange}
                                value={details.streetNumber}
                            ></input> : <h3 className={styles.data}>{details.streetNumber}</h3>}
                        </div>
                    </div>
                    <div className={styles.propertyContainer}>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>City</label>
                            { editMode ? <input
                                name="city"
                                className={styles.input}
                                placeholder={details.city}
                                onChange={handleChange}
                                value={details.city}
                            ></input> : <h3 className={styles.data}>{details.city}</h3>}
                        </div>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>State</label>
                            { editMode ? <input
                                name="state"
                                className={styles.input}
                                placeholder={details.state}
                                onChange={handleChange}
                                value={details.state}
                            ></input> : <h3 className={styles.data}>{details.state}</h3>}
                        </div>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>Zip</label>
                            { editMode ? <input
                                name="zip"
                                className={styles.input} 
                                placeholder={details.zip}
                                onChange={handleChange}
                                value={details.zip}
                            ></input> : <h3 className={styles.data}>{details.zip}</h3>}
                        </div>
                    </div>
                    <div className={styles.labelInput}>
                        <label className={styles.label}>Rent</label>
                        { editMode ? <input
                            name="rent"
                            className={styles.input} 
                            placeholder={details.rent}
                            onChange={handleChange}
                            value={details.rent}
                        ></input> : <h3 className={styles.data}>${details.rent}</h3>}
                    </div>
                    <div className={styles.labelInput}>
                        <label className={styles.label}>Occupied</label>
                        { editMode ? <input
                            name="occupied"
                            className={styles.input} 
                            placeholder={details.occupied}
                            onChange={handleChange}
                            value={details.occupied}
                        ></input> : <h3 className={styles.data}>{details.occupied}</h3>}
                    </div>
                    <div className={styles.labelInput}>
                        <label className={styles.label}>this is something</label>
                        { editMode ? <input
                            className={styles.input} 
                            placeholder="this is a placeholder"
                        ></input> : <h3 className={styles.data}>this is a placeholder</h3>}
                    </div>
                    { editMode && <div className={styles.buttonContainer}>
                        <button className={styles.cancel} onClick={handleClick}>Cancel</button>
                        <button className={styles.saveChanges}>Save Changes</button>
                    </div>}
                </form>
            </div>
            </div>
        </div>
    )
}