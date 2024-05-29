import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";


const Good = ({good, idx}) => {
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className="products">
            <div className="product">
                <div key={idx} className="text">
                <h2>{good.name}</h2>
                <p className="priceContainer">$ {good.price}</p>
                <img className="allGoods" src={`./${good.img}.jpg`} alt='pic'/>
                <div className="product">
                    <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
                    <button onClick={() => {dispatch(addItemToCart({good, quantity}))}} className="btn">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Good;