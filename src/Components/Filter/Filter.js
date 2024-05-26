import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/goodsSlice";

const Filter = ({category, id}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector(getSelectedCategory)

    return(
    <div>
        <p key={id} onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButton Selected' : 'categoryButton'}>{category}</p>
    </div>
    )
}
export default Filter;