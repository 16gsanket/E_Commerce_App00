import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTotalCartPrice } from '../Features/Cart/cartSlice';


function CartOverview() {

  const cart_length = useSelector(state=>state.cart.cart.length)
  console.log("total  Cart Quantity : " , cart_length);

  const totalPrice = useSelector(selectTotalCartPrice);
  console.log('price' , totalPrice);
    
  
  return (
    <div className=" flex  items-center justify-between bg-stone-800 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-6 font-semibold text-stone-300 sm:space-x-5">
        {/* <span>{totalCartQuantity} Items</span> */}
        <span>{cart_length} Items</span>
        <span>${totalPrice.toFixed(2)}</span>
        {/* <span>$25</span> */}
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;