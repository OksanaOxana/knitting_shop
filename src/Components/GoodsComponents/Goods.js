import dataGoods from "../../dataGoods";
import { getSelectedCategory } from "../../redux/goodsSlice";
import Good from "./Good";
import { useSelector } from "react-redux";


const Goods = () => {
const selectedCategory = useSelector(getSelectedCategory)

    return(<div className="products">
        {dataGoods
        .filter((good)=> {
            if(selectedCategory === 'all') return true
            return selectedCategory === good.category})
            .map((good, id) =>
            <Good key={id}  good ={good} />)}

        </div>
    
    )
}
export default Goods;