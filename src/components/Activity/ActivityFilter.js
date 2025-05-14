export default function ActivityFilter (props) {

        const dropDownChangeHandler = (event) => {

            props.onFilterChange(event.target.value)
        }


    return (
        <div className="bg-gray-800 rounded-lg py-1 px-4 mb-4">
            <div className="flex justify-between items-center">
                <label className="text-white">Filter by Year</label>
                <select 
                value={props.selected} 
                onChange={dropDownChangeHandler} className="text-gray-900 rounded-lg bg-white text-semibold px-2 py-1">
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
        </div>
    )
}