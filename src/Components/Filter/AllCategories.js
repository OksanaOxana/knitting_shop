import Filter from "./Filter";


const AllCategories = () => {
    return(
        <div>
            <h2>What do you need?</h2>
            {['threads','needles','samples', 'all'].map((category) => <Filter category = {category}/>)}
          
        </div>
    )
}
export default AllCategories;