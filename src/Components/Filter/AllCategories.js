import Filter from "./Filter";


const AllCategories = () => {
    return(
        <div>
            <h2>What do you need?</h2>
            <div >
            {['threads','needles','samples', 'all'].map((category, id) => <Filter key={id} category = {category}/>)}
            </div>
        </div>
    )
}
export default AllCategories;