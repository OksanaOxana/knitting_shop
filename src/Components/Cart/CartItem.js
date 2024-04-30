import { useDispatch } from "react-redux";
import dataGoods from "../../dataGoods";
import { removeItemFromCart } from "../../redux/cartSlice";
import del from "./delete.png"

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const goods = dataGoods.find(item => item.id === cartItem.goodId)
 console.log(goods)
    return(
        <div className="total">
            <p>{goods.name} - {cartItem.quantity} : ${goods.price*cartItem.quantity}</p>
            <span onClick={() =>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
                <img className="iconTwo" src={del} alt='pic'/>
            </span>
        </div>
        
    )
}
export default CartItem;