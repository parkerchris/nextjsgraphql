import { useState } from 'react'
import styles from '../styles/InfoCard.module.css'
import { RiEdit2Fill } from "react-icons/ri";



export default function InfoCard() {


    const [ editMode, setEditMode] = useState(false)
    const [ details, setDetails ] = useState({

    })

    function handleClick() {
        setEditMode(!editMode)
    }

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
                        <div className={styles.labelInput}>
                            <label className={styles.label}>Number</label>
                            { editMode ? <input
                                className={styles.input}
                                placeholder="1405"
                            ></input> : <h3 className={styles.data}>1405</h3>}
                        </div>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>Street</label>
                            { editMode ? <input
                                className={styles.input} 
                                placeholder="Ridge Dr."
                            ></input> : <h3 className={styles.data}>Ridge Dr.</h3>}
                        </div>
                    </div>
                    <div className={styles.propertyContainer}>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>City</label>
                            { editMode ? <input
                                className={styles.input}
                                placeholder="Redding"
                            ></input> : <h3 className={styles.data}>Redding</h3>}
                        </div>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>State</label>
                            { editMode ? <input
                                className={styles.input}
                                placeholder="CA"
                            ></input> : <h3 className={styles.data}>CA</h3>}
                        </div>
                        <div className={styles.labelInput}>
                            <label className={styles.label}>Zip</label>
                            { editMode ? <input
                                className={styles.input} 
                                placeholder="96001"
                            ></input> : <h3 className={styles.data}>96001</h3>}
                        </div>
                    </div>
                    <div className={styles.labelInput}>
                        <label className={styles.label}>Rent</label>
                        { editMode ? <input
                            className={styles.input} 
                            placeholder="$2000"
                        ></input> : <h3 className={styles.data}>$2000</h3>}
                    </div>
                    <div className={styles.labelInput}>
                        <label className={styles.label}>Occupied</label>
                        { editMode ? <input
                            className={styles.input} 
                            placeholder="Yes"
                        ></input> : <h3 className={styles.data}>Yes</h3>}
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