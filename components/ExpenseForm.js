export default function ExpenseForm() {
    return (
        <div>
            <form>
                <div>
                    <label>Date</label>
                    <input
                        placeholder="Add a date"
                    ></input>
                </div>
                <div>
                    <label>Property</label>
                    <input
                        placeholder="Which property"
                    ></input>
                </div>
                <div>
                    <label>Category</label>
                    <input
                        placeholder="Enter a category"
                    ></input>
                </div>
                <div>
                    <label>Description</label>
                    <input
                        placeholder="Add a description"
                    ></input>
                </div>
                <div>
                    <label>Amount</label>
                    <input></input>
                </div>
            </form>
        </div>
    )
}