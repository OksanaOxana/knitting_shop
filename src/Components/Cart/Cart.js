
import { useSelector } from "react-redux";
import cart from "../../shopping-cart.png"
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div>
            <h3>TOTAL: ${totalPrice}</h3>
            <div className="imgCart">
            <img className="icon" src={cart} alt='cart'/>
            </div>
        
            {cartItems.map((cartItem, id) => <CartItem key={id} cartItem = {cartItem}/>)}
        
        </div>
    )
}
export default Cart;