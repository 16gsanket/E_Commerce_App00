
import { useDispatch } from "react-redux";
import LinkButton from "../ui/LinkButton";
import Button from "../ui/Button";
import CartItem from "../ui/CartItem";
import { useSelector } from 'react-redux';
import { clearCart } from "../Features/Cart/cartSlice";
import EmptyCart from "../ui/EmptyCart";



function Cart() {
  const dispatch = useDispatch()
  const cart_now = useSelector(state=>state.cart.cart)
  console.log(cart_now)

  

 
  if(cart_now.length === 0) return <EmptyCart />

  return (
    <div className='pl-3 mb-10'>
      <LinkButton to="/home">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart has {cart_now.length} items </h2>

      <ul className='divide-y divide-stone-200 border-b mt-3 h-[50dvh] overflow-y-scroll'>
        {cart_now.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="px-4 py-3 mt-6 space-x-2 flex ">
        <Button to="/order/new" type="primary">
          Place Order
        </Button>

        {/* <Link to="/order/new">Order pizzas</Link> */}

          <Button type='secondary' onClick={()=>dispatch(clearCart())}> Clear Cart</Button>

        {/* <button>Clear cart</button> */}

      </div>
    </div>
  );
}

export default Cart;