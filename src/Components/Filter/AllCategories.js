import Filter from "./Filter";


const AllCategories = () => {
    return(
        <div>
            <h2>What do you need?</h2>
            <div >
            {['threads','needles','samples', 'all'].map((category) => <Filter key={category} category = {category}/>)}
            </div>
        </div>
    )
}
export default AllCategories;