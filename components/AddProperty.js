import { GraphQLClient, gql } from 'graphql-request'
import styles from '../styles/AddProperty.module.css'


export const getServerSideProps = () => {

    const url = process.env.GRAPH_CMS_ENDPOINT
    const client = new GraphQLClient(url, {
      headers: {
        "Authorization" : process.env.GRAPH_CMS_TOKEN
      }
    })

    const MUTATION = gql`

    `

}

export default function AddProperty() {





    return(
        <form className={styles.form}>
            <h4>Add a property</h4>
            <div className={styles.container}>
                <div className={styles.labelInput}>
                    <label className={styles.label}>Street</label>
                    <input
                        className={styles.input}
                        placeholder="Street number"
                    />
                </div>
                <div className={styles.labelInput}>
                    <label className={styles.label}>City</label>
                    <input
                        className={styles.input}
                        placeholder="City"
                    />
                </div>
                <div className={styles.labelInput}>
                    <label className={styles.label}>State</label>
                    <input
                        className={styles.input}
                        placeholder="State"
                    />
                </div>
                <div className={styles.labelInput}>
                    <label className={styles.label}>Zip</label>
                    <input
                        className={styles.input}
                        placeholder="Zip"
                    />
                </div>
                <button className={styles.button}>Submit</button>
            </div>
        </form>
    )
}